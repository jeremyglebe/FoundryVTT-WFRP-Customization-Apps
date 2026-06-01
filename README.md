# WFRP4e Customizer Apps

Foundry VTT module for Vue-powered WFRP4e customization applications.

## Installation

Use this manifest URL in Foundry's module installer:

```text
https://github.com/jeremyglebe/FoundryVTT-WFRP-Customization-Apps/releases/latest/download/module.json
```

## Features

- Opens an NPC Builder from the Foundry module settings menu.
- Opens the NPC Builder from the Actor Directory header.
- Builds WFRP4e NPC Actors from selected base statblocks, Career Items, selected traits, trappings, and editable advancement drafts.
- Exposes a small macro-friendly API for opening the module workbench or NPC Builder.

## Macro Access

Create a Foundry script macro with:

```js
game.modules.get("wfrp4e-customizer-apps").api.openNpcBuilder();
```

The workbench can also be opened with:

```js
game.modules.get("wfrp4e-customizer-apps").api.openWorkbench();
```

## Compatibility

- Foundry VTT v13 verified.
- WFRP4e system required.
