<template>
  <v-form>
    <v-text-field :label="$t('footer.contact.name')" dense outlined></v-text-field>
    <v-text-field :label="$t('footer.contact.email')" dense outlined></v-text-field>
    <v-text-field :label="$t('footer.contact.subject')" dense outlined></v-text-field>
    <v-textarea
      dense
      :label="$t('footer.contact.message')"
      auto-grow
      outlined
      rows="8"
      row-height="20"
    ></v-textarea>
    <v-btn outlined block color="primary">{{$t('footer.contact.send')}}</v-btn>
  </v-form>
</template>
