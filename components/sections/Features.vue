<template>
  <section class="primary darken-1 white--text py-16">
    <v-container>
      <v-row>
        <v-col class="text-center">
          <h2 class="text-h4 text-md-h3 text-center font-weight-black">
            {{ $t('index.feature.title') }}

          </h2>
          <div class="text-h5 text-md-h4 text-center font-weight-black py-3 mb-10"
          >
            {{ $t('index.feature.subtitle') }}
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(card, index) in cards"
          :key="index"
          cols="12"
          sm="4"
          class="text-center"
        >
          <v-avatar
            size="80"
            class="display-1 white font-weight-bold primary--text mb-5"
            style="opacity: 1.15"
            >{{ card.callout }}</v-avatar
          >
          <div class="title text-uppercase mt-1 mb-4" v-text="card.title"></div>

          <p v-text="card.text"></p>
          <v-row no-gutters>
            <v-col cols="12"> </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-btn x-large rounded color="white primary--text mx-auto mt-10 px-16">
          <v-icon dark left> mdi-check-bold </v-icon>{{ $t('index.feature.btn') }}
        </v-btn>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: this.$t("index.feature.cards.card1.title"),
          subtitle: this.$t("index.feature.cards.card1.subtitle"),
          text: this.$t("index.feature.cards.card1.text"),
          callout: this.$t("index.feature.cards.card1.callout"),
        },
        {
          title: this.$t("index.feature.cards.card1.title"),
          subtitle: this.$t("index.feature.cards.card1.subtitle"),
          text: this.$t("index.feature.cards.card1.text"),
          callout: this.$t("index.feature.cards.card1.callout"),
        },
        {
          title: this.$t("index.feature.cards.card1.title"),
          subtitle: this.$t("index.feature.cards.card1.subtitle"),
          text: this.$t("index.feature.cards.card1.text"),
          callout: this.$t("index.feature.cards.card1.callout"),
        },
      ],
    }
  },
}
</script>
