<template>
  <article class="container methodology">
    <h1>Editorial and Verification Standards</h1>
    <p class="lead">I Know My Own LLM publishes practical, community-editable guidance for people evaluating AI vendors. Our standard is simple: distinguish evidence from promises and make important claims independently checkable.</p>

    <h2>How content is prepared</h2>
    <p>Guides are written and reviewed by the I Know My Own LLM editorial team. We prioritize primary sources, official registries, standards bodies, and reproducible evidence. Community stories are anonymized, edited for clarity, and presented as warning patterns rather than allegations about identifiable organizations.</p>

    <h2>Corrections and updates</h2>
    <p>Every guide displays publication and update dates. Material corrections are made in the public repository history. Readers can propose a correction, source, principle, or red-flag example through our <a href="https://github.com/I-Know-My-Own-LLM/iknowmyownllm_manifesto/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener">contribution process</a>.</p>

    <h2>What this site does not provide</h2>
    <p>The manifesto is an educational resource, not legal, security, procurement, or investment advice. Organizations should apply controls proportionate to their use case and obtain specialist advice where required.</p>

    <h2>Community accountability</h2>
    <p>The principles, source content, and revision history are public. We welcome challenges supported by evidence. See the <NuxtLink to="/resources">verification resources</NuxtLink> or <NuxtLink to="/#sign">sign the manifesto</NuxtLink>.</p>
  </article>
</template>

<script setup lang="ts">
usePageSeo({
  title: 'Editorial and Verification Standards',
  description: 'Learn how I Know My Own LLM prepares, sources, reviews, corrects, and updates practical guidance for evaluating AI vendors and their claims.',
  path: '/methodology'
})
useHead({ script: [{ type: 'application/ld+json', innerHTML: JSON.stringify({
  '@context': 'https://schema.org', '@type': 'AboutPage', name: 'Editorial and Verification Standards',
  url: 'https://iknowmyllm.com/methodology'
}) }] })
</script>

<style scoped>
.methodology { max-width: 820px; padding-top: 5rem; padding-bottom: 5rem; }
.methodology h1 { font-size: clamp(2rem, 5vw, 3.25rem); margin-bottom: 1.5rem; }
.methodology h2 { margin: 2.5rem 0 .75rem; }
.methodology p { color: var(--text-secondary); line-height: 1.8; }
.methodology .lead { font-size: 1.15rem; }
</style>
