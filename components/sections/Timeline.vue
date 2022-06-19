<template>
  <section id="timeline" class="py-16">
    <v-container>
      <h2 class="text-h3 text-center font-weight-black mb-8"> {{ $t('about.journey.title') }}</h2>
      <template>
        <v-timeline>
          <v-timeline-item
              v-for="(year, i) in years"
              :key="i"
              :color="year.color"
              small
          >
            <template v-slot:opposite>
              <span
                  :class="`headline font-weight-bold ${year.color}--text`"
                  v-text="year.year"
              ></span>
            </template>
            <div class="py-4">
              <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
                {{ $t('about.journey.history.title') }}
              </h2>
              <div>
                {{ $t('about.journey.history.detail') }}
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </template>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      years: [
        {
          color: this.$t('about.journey.history.color'),
          year: this.$t('about.journey.history.year'),
          title: this.$t('about.journey.history.title'),
          detail: this.$t('about.journey.history.detail'),
        },
      ],
    }
  },
}
</script>
