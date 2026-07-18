export const nanosami = {
  name: "NanoSami",
  tagline: "Deterministic, offline analysis of nanomaterials and experimental data — reproducible results without cloud dependence.",
  currentVersion: "0.2.0-alpha",
  platforms: "Python 3.10+ • CLI • Cross-platform",
  license: "MIT",
  links: {
    download: "https://github.com/samiabdullah2500-hash/NanoSami/releases",
    github: "https://github.com/samiabdullah2500-hash/NanoSami",
    docs: "https://github.com/samiabdullah2500-hash/NanoSami#readme",
  },
  overview: "NanoSami is scientific software for deterministic, offline analysis of nanomaterials and experimental data. Every analysis is fully reproducible: the same input data and parameters always produce identical outputs. It runs completely locally with zero network dependencies after installation — ideal for air-gapped lab environments, sensitive data, and reproducible research workflows.",
  problem: [
    "Many analysis tools require uploading experimental data to cloud services, raising privacy and compliance issues in research labs.",
    "Reproducibility is broken by hidden dependencies, floating library versions, and non-deterministic algorithms.",
    "Lab computers frequently lack reliable internet or are restricted by institutional IT policies.",
    "Existing open-source tools are often fragmented, overly complex, or lack clear provenance tracking.",
  ],
  features: [
    { title: "Deterministic Engine", note: "Bit-for-bit reproducible results. No random seeds, no floating-point surprises across runs." },
    { title: "Completely Offline", note: "Install once, run forever on isolated machines. No telemetry, no accounts, no API keys." },
    { title: "Multi-Technique Support", note: "Native parsers and analysis for XRD, FTIR, Raman, SEM images, and tabular data." },
    { title: "Provenance & Audit", note: "Every result carries full metadata: input hash, parameters, software version, timestamp." },
    { title: "Publication-Ready Exports", note: "Generate figures, tables, and methods sections ready for papers and supplementary info." },
    { title: "Extensible Recipes", note: "Shareable YAML/JSON analysis pipelines that anyone can re-run exactly." },
  ],
  screenshots: [
    // Placeholder paths - replace with real screenshots when available
    { src: "/images/nanosami/dashboard.svg", caption: "Main analysis dashboard with XRD peak fitting" },
    { src: "/images/nanosami/results.svg", caption: "Reproducible results view with full provenance" },
  ],
  installation: "# Recommended: pip install from source or releases\npip install git+https://github.com/samiabdullah2500-hash/NanoSami.git\n# Or download pre-built binaries from GitHub Releases",
  usage: "nanosami analyze ./my-xrd-data.csv --technique xrd --output ./results/ --recipe standard-zno",
  changelog: [
    {
      version: "0.2.0-alpha",
      date: "2026-07",
      changes: [
        "Added FTIR and Raman analysis modules",
        "Improved CLI with recipe system",
        "Full provenance tracking in output JSON",
        "Initial public alpha release",
      ],
    },
    {
      version: "0.1.0",
      date: "2026-06",
      changes: ["Core XRD peak detection and fitting", "Basic deterministic pipeline", "CLI interface prototype"],
    },
  ],
  roadmap: [
    { status: "In progress", milestone: "Desktop GUI (Tauri + React) for visual peak fitting and batch processing" },
    { status: "Planned", milestone: "Support for additional techniques: UV-Vis, DLS, TGA/DSC" },
    { status: "Planned", milestone: "One-click export to manuscript figures (SVG/PDF) and supplementary data packages" },
    { status: "Planned", milestone: "Integration with electronic lab notebooks (ELN) via open standards" },
    { status: "Future", milestone: "AI-assisted peak identification and phase matching with local models" },
  ],
};