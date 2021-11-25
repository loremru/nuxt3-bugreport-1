import { computed } from 'vue'
import { useMq as Mq } from 'vue3-mq'

export default function useMq() {
  const mq = Mq()

  // const isMobile = computed(() => {
  //   return mq.current === 'phone'
  // })
  //
  // const isTablet = computed(() => {
  //   return mq.current === 'tablet'
  // })
  //
  // const isAir = computed(() => {
  //   return mq.current === 'air'
  // })
  //
  // const isDesktop = computed(() => {
  //   return mq.current === 'air' || mq.current === 'lg' || mq.current === 'xl' || mq.current === 'dxl'
  // })
  //
  // const isLg = computed(() => {
  //   return mq.current === 'lg'
  // })
  //
  // const isXl = computed(() => {
  //   return mq.current === 'xl'
  // })
  //
  // const is4xl = computed(() => {
  //   return mq.current === 'dxl'
  // })
  //
  // const isMobileOrTablet = computed(() => {
  //   return isMobile.value || mq.current === 'tablet'
  // })
  //
  // const isTabletOrDesktop = computed(() => {
  //   return isTablet.value || isDesktop.value
  // })
  //
  // const screen = computed(() => {
  //   return mq.current
  // })

  const isPhone = computed(() => {
    return ['phone'].includes(mq.current)
  })

  const isShortTablet = computed(() => {
    return ['md'].includes(mq.current)
  })

  const isWideTablet = computed(() => {
    return ['air'].includes(mq.current)
  })

  const isTablet = computed(() => {
    return ['md', 'air'].includes(mq.current)
  })

  const isLg = computed(() => {
    return ['lg'].includes(mq.current)
  })

  const isXl = computed(() => {
    return ['xl'].includes(mq.current)
  })

  const is2Xl = computed(() => {
    return ['2xl'].includes(mq.current)
  })

  const isDesktop = computed(() => {
    return ['lg', 'xl', '2xl'].includes(mq.current)
  })

  const isPhoneOrTablet = computed(() => {
    return ['phone', 'md', 'air'].includes(mq.current)
  })

  const isTabletOrDesktop = computed(() => {
    return ['md', 'air', 'lg', 'xl', '2xl'].includes(mq.current)
  })

  const screen = computed(() => {
    return mq.current
  })

  return {
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
  }
}
