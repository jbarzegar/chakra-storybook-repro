# Chakra storybook bug reproduction

## Problem

> `chakra` components unstyled in storybook

In each `workspace` within this repo is a copy of a simple `Counter` component. Each component uses the same chakra components for each workspace project. These will render correctly loaded outside of storybook but all styles are lost once in storybook

In order to determine whether or not this was isolated to chakra I've used [Theme UI](https://theme-ui.com) in another story to see if this is an issue caused by storybook, and it seems isolated to chakra
