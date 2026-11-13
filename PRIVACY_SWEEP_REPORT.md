# Privacy Sweep Report

Date: 2026-11-13
Scope: portfolio-website repository, working tree and full git history.

## Tokens searched

- CGPA
- CGPA 3.76
- backlog / backlogs
- approved leave
- SLP
- 3.76
- 3.18
- 3.00 SGPA
- 20 pending credits / pending credits

## Working tree results

After the edit to `src/pages/Resume.tsx`, the working tree contains zero
private-token hits. The only `3.18` matches are the `nanoid` package version
3.3.18 in `package-lock.json`, which is a dependency version string, not
personal data.

Command:

```
git grep -E "\bSLP\b|3\.00 SGPA|20 pending credits|approved leave|backlogs|CGPA" -- .
```

Result: exit code 1 (zero matches).

## History scrub

Private text appeared in `src/pages/Resume.tsx` and `src/pages/Record.tsx`
across 29 commits. The history was rewritten with git filter-branch using a
tree-filter that applies sed substitutions to both files in every commit:

```
git filter-branch -f --tree-filter "sed -i \
  -e 's/CGPA 3\.76 working record, 5 active backlogs, on approved leave\.//g' \
  -e 's/CGPA 3\.76 working record, on leave\.//g' \
  -e 's/CGPA 3\.76, on approved leave\.//g' \
  -e 's/CGPA 3\.76//g' \
  src/pages/Resume.tsx src/pages/Record.tsx 2>/dev/null || true" \
  --prune-empty --tag-name-filter cat -- --all
```

Backup refs (`refs/original/*`) and the rewritten stash ref were deleted,
reflogs expired, and loose objects pruned:

```
git update-ref -d refs/original/refs/heads/main
git update-ref -d refs/original/refs/remotes/origin/main
git update-ref -d refs/original/refs/stash
git update-ref -d refs/stash
git reflog expire --expire=now --all
git gc --prune=now --aggressive
```

## Verification

Full-history scan across every reachable commit:

```
git grep "CGPA 3.76" $(git rev-list --all)
```

Result: zero hits.

```
git grep -E "CGPA|approved leave|backlogs|SLP|3\.76|SGPA|pending credits" $(git rev-list --all)
```

Result: zero hits (exit code 1).

Pre-scrub commit objects (`3831640`, `bf8f73e`, original stash `5becedf7`)
no longer exist in the local object store (`git cat-file -t` returns "could
not get object info"). Commit messages were scanned with
`git log --all --grep="CGPA"` and contain no private tokens.

The two stale Vercel remote-tracking branches
(`origin/vercel/install-and-configure-vercel-s-orujnu`,
`origin/vercel/install-vercel-web-analytics-i-s6pgnz`) were scanned and
contain no private tokens; they were not rewritten.

## Force push

Rewritten history force-pushed to
`https://github.com/yagneshkumarkoduru/portfolio.git` as the personal
GitHub account (Ronin1067):

```
git push origin --force --all
+ 3831640...6d22c02 main -> main (forced update)
git push origin --force --tags
Everything up-to-date
```

## Notes

The admissions directory (`C:\research\admissions`) has no git repository;
its files are untracked and were not modified.
