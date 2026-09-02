import { Navigate, Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Record } from "./pages/Record";
import { Contact } from "./pages/Contact";

export default function App() {
  return <>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/record" element={<Record />} />
        <Route path="/work" element={<Navigate to="/record" replace />} />
        <Route path="/resume" element={<Navigate to="/record" replace />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
    <SpeedInsights />
  </>;
}
