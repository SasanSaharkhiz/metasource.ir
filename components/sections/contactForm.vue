<template>
  <v-form>
    <v-row class="mb-n6">
      <v-col><v-text-field :label="$t('contact.form.name')" dense outlined></v-text-field></v-col>
      <v-col><v-text-field :label="$t('contact.form.email')" dense outlined></v-text-field></v-col>
    </v-row>

    <v-row class="mb-n6">
      <v-col
        ><v-text-field :label="$t('contact.form.subject')" dense outlined></v-text-field
      ></v-col>
    </v-row>
    <v-row class="mb-n6">
      <v-col>
        <v-textarea
          dense
          :label="$t('contact.form.message')"
          auto-grow
          outlined
          rows="8"
          row-height="20"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        ><v-btn class="my-2" color="primary">{{ $t('contact.form.send') }}</v-btn
        ><v-btn class="my-2 ml-3">{{ $t('contact.form.clear') }}</v-btn></v-col
      >
    </v-row>
  </v-form>
</template>
