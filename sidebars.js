/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['Start/Introduction','Start/TEE','Start/Enarx','Start/Conclusion'],
    },
    {
      type: 'category',
      label: 'Installation Guide',
      items: ['Installation/Introduction','Installation/Requirements','Installation/Setup','Installation/Enarx','Installation/Wasm','Installation/Conclusion',],
    },
    {
      type: 'category',
      label: 'WebAssembly Guide',
      items: ['WebAssembly/Introduction', 'WebAssembly/Rust', 'WebAssembly/Golang', 'WebAssembly/C++', 'WebAssembly/C'],
    },  
    {
      type: 'category',
      label: 'Contributing Guide',
      items: ['Contributing/Introduction','Contributing/Onboarding','Contributing/Code','Contributing/Coding-Style','Contributing/Git-hook','Contributing/PRs','Contributing/Issues','Contributing/RFCs','Contributing/Docs','Contributing/Outreach','Contributing/Lab'],
    },
    {
      type: 'category',
      label: 'Fellowship Guide',
      items: ['Fellowship/Introduction','Fellowship/Audience','Fellowship/Benefits','Fellowship/Partners','Fellowship/Initiatives','Fellowship/Ideas','Fellowship/Schedule','Fellowship/Conclusion'],
    },
    {
      type: 'category',
      label: 'Technical Overview',
      items: ['Technical/Introduction','Technical/Problem','Technical/Design','Technical/Threat','Technical/Trust-Architecture','Technical/TEE','Technical/Components','Technical/Runtime','Technical/WebAssembly','Technical/Process-Flow','Technical/Syscall-Proxy','Technical/Hardware','Technical/Builds','Technical/Vulnerabilities-Attacks','Technical/AMD-SEV','Technical/AMD-SEV-Attestation','Technical/AMD-SNP','Technical/Intel-SGX','Technical/Intel-SGX-Measurement','Technical/Cases','Technical/FAQ',],
    },
  ],
};

module.exports = sidebars;
