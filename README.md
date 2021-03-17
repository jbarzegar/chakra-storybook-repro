# Chakra storybook bug reproduction

## Problem

> `chakra` components unstyled in storybook

In each `workspace` within this repo is a copy of a simple `Counter` component. Each component uses the same chakra components for each workspace project. These will render correctly loaded outside of storybook but all styles are lost once in storybook

In order to determine whether or not this was isolated to chakra I've used [Theme UI](https://theme-ui.com) in another story to see if this is an issue caused by storybook, and it seems isolated to chakra and storybook.

## To test
For simplicty I ran `npx creat-react-app standard-cra --template typescript` for a fresh CRA project

Followed the [Chakra setup docs](https://chakra-ui.com/docs/getting-started) adding the provider to the approriate place.

Initialized storybook with `npx -p @storybook/cli sb init`.

Running `yarn start` (starting the react app) renders chakra correctly

`yarn storybook` will render but with broken chakra styles.
