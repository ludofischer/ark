<script lang="ts" setup>
import { ref } from 'vue'
import { Menu } from '../'

const value = ref({
  framework: '',
  libraries: [],
})
</script>

<template>
  <Menu.Root v-model="value">
    <Menu.Trigger>Open menu</Menu.Trigger>
    <Menu.Positioner>
      <Menu.Content>
        <Menu.ItemGroup id="radio-group">
          <Menu.ItemGroupLabel htmlFor="radio-group">Radio Group</Menu.ItemGroupLabel>
          <Menu.OptionItem name="framework" type="radio" value="react" checked>
            <Menu.OptionItemIndicator>✅</Menu.OptionItemIndicator>
            <Menu.OptionItemText>React</Menu.OptionItemText>
          </Menu.OptionItem>
          <Menu.OptionItem name="framework" type="radio" value="solid" checked>
            <Menu.OptionItemIndicator>✅</Menu.OptionItemIndicator>
            <Menu.OptionItemText>Solid</Menu.OptionItemText>
          </Menu.OptionItem>
          <Menu.OptionItem name="framework" type="radio" value="vue" checked>
            <Menu.OptionItemIndicator>✅</Menu.OptionItemIndicator>
            <Menu.OptionItemText>Vue</Menu.OptionItemText>
          </Menu.OptionItem>
        </Menu.ItemGroup>
        <Menu.ItemGroup id="checkbox-group">
          <Menu.ItemGroupLabel htmlFor="checkbox-group">Checkbox Group</Menu.ItemGroupLabel>
          <Menu.OptionItem name="libraries" type="checkbox" value="zag-js" checked>
            <Menu.OptionItemIndicator>✅</Menu.OptionItemIndicator>
            <Menu.OptionItemText>Zag.js</Menu.OptionItemText>
          </Menu.OptionItem>
          <Menu.OptionItem name="libraries" type="checkbox" value="ark" checked>
            <Menu.OptionItemIndicator>✅</Menu.OptionItemIndicator>
            <Menu.OptionItemText>Ark UI</Menu.OptionItemText>
          </Menu.OptionItem>
          <Menu.OptionItem name="libraries" type="checkbox" value="panda" checked>
            <Menu.OptionItemIndicator>✅</Menu.OptionItemIndicator>
            <Menu.OptionItemText>Panda CSS</Menu.OptionItemText>
          </Menu.OptionItem>
          <Menu.OptionItem name="libraries" type="checkbox" value="chakra" checked>
            <Menu.OptionItemIndicator>✅</Menu.OptionItemIndicator>
            <Menu.OptionItemText>Chakra UI</Menu.OptionItemText>
          </Menu.OptionItem>
        </Menu.ItemGroup>
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>
</template>
