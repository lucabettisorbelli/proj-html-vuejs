<script>
import PageHeader from './components/PageHeader.vue'
import PageMain from './components/PageMain.vue'
import PageFooter from './components/PageFooter.vue'


export default {
  components: {
    PageHeader,
    PageMain,
    PageFooter,
  },
  data() {
    return {
      menuItems: [
        'Home',
        'About Us',
        'Services',
        'Shop',
        'Our Team',
        'Blog',
        'Contact Us'
      ]
    }
  }
}
</script>

<template>
  <PageHeader :menuItems="menuItems" />
  <PageMain />
  <PageFooter />
</template>

<style scoped></style>
