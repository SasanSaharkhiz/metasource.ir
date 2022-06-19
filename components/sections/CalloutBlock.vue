<template>
  <section
    :class="
      $vuetify.theme.dark
        ? 'grey darken-4 primary--text text--lighten-1'
        : 'grey lighten-4 primary--text'
    "
    class="primary--text py-16"
  >
    <v-container>
      <v-row>
        <v-col>
          <v-row no-gutters>
            <v-col cols="12" sm="7" class="text-center">
              <h2 class="text-h4 text-md-h3 text-center font-weight-black text-capitalize mb-4">
                {{ $t('index.callout.title') }}
              </h2>
              <p>
                {{ $t('index.callout.subtitle') }}
              </p>
            </v-col>
            <v-col align-self="center" cols="12" sm="5" class="text-center">
              <v-btn x-large color="primary" rounded>{{ $t('index.callout.btn') }}</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
