<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'
import useMq from '~/composables/useMq'

const {
  mq,
  screen,
  isPhone,
  isShortTablet,
  isWideTablet,
  isTablet,
  isLg,
  isXl,
  is2Xl,
  isDesktop,
  isPhoneOrTablet,
  isTabletOrDesktop,
} = useMq()

provide('mq', mq)
provide('screen', mq)
provide('isPhone', isPhone)
provide('isShortTablet', isShortTablet)
provide('isWideTablet', isWideTablet)
provide('isTablet', isTablet)
provide('isLg', isLg)
provide('isXl', isXl)
provide('is2Xl', is2Xl)
provide('isDesktop', isDesktop)
provide('isPhoneOrTablet', isPhoneOrTablet)
provide('isTabletOrDesktop', isTabletOrDesktop)
</script>
