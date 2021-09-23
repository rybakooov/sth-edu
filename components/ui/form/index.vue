<template>
  <form @submit.prevent="onSubmit">
    <slot :errors="errors || {}" :valid="!errors"/>
  </form>
</template>

<script>
  import validate from 'validate.js'

  export default {
    name: 'UiForm',
    props: {
      rules: {
        type: Object,
        default: () => {}
      },
      form: {
        type: Object,
        default: () => {}
      }
    },
    data () {
      return {
        errors: null
      }
    },
    methods: {
      onSubmit () {
       this.submit()
      },
      submit () {
        this.touch()
        this.validate()

        if (this.errors) {
          this.$emit('error')
        } else {
          this.$emit('submit')
        }
      },
      validate () {
        const form = Object.keys(this.form).reduce((form, name) => {
          if (this.form[name]) {
            form[name] = this.form[name]
          }
          return form
        }, {})
        this.errors = validate(form, this.rules)

        this.$emit('valid', !this.errors)

        return this.errors
      },
      touch () {
        this.$children.forEach((item) => {
          item.touch && item.touch()
        })
      },
      clear () {
        this.errors = null
        this.$children.forEach((item) => {
          item.clear && item.clear()
        })
        this.validate()
      }
    },
    mounted () {
      this.validate()
    }
  }
</script>
