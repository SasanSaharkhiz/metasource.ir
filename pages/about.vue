<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <!--        <SectionsHeroAlt :hero-alt="heroAlt"/>-->
        <v-container>
          <v-row class="py-16">
            <v-col cols="12">
              <h4 class="text-h4 text-md-h3 text-center font-weight-black text-capitalize">
                {{ $t('about.title') }}
              </h4>
              <h6 class="text-h6 text-uppercase text--disabled font-weight-thin text-center my-8">
                {{ $t('about.sub-title') }}
              </h6>
            </v-col>
            <v-col cols="12" md="6">
              <p>
                {{ $t('about.part1') }}
              </p>
              <blockquote class="text-h4 pa-5 my-4 font-weight-thin">
                {{ $t('about.part2') }}
              </blockquote>
              <p>
                {{ $t('about.part3') }}
              </p>
            </v-col>
            <v-col cols="12" md="6">
              <p>
                {{ $t('about.part4') }}
              </p>
            </v-col>
          </v-row>
        </v-container>
        <SectionsTeam :our-team="ourTeam"/>

        <v-row no-gutters>
          <v-col cols="12" md="6" align-self="center">
            <v-img
                max-height="800"
                src="pexels-canva-studio-3277806.jpg"
                lazy-src="pexels-canva-studio-3277806.jpg"
            >
            </v-img>
          </v-col>
          <v-col cols="12" md="6" align-self="center">
            <div class="pa-lg-16 pa-md-10 px-4 py-16">
              <h2 class="text-h3 text-center font-weight-black">{{ $t('about.vision') }}</h2>
              <h3
                  class="text-h5 text-uppercase font-weight-thin text-center my-8"
              >
                {{ $t('about.vision_sub') }}
              </h3>
              <p>
                {{ $t('about.vision') }}
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters class="flex-row-reverse">
          <v-col cols="12" md="6" align-self="center">
            <v-img
                max-height="800"
                src="pexels-rfstudio-3810792.jpg"
                lazy-src="pexels-rfstudio-3810792.jpg"
            >
            </v-img>
          </v-col>
          <v-col cols="12" md="6" align-self="center">
            <div class="pa-lg-16 pa-md-10 px-4 py-16">
              <h2 class="text-h3 text-center font-weight-black">{{ $t('about.mission') }}</h2>
              <h3
                  class="text-h5 text-uppercase font-weight-thin text-center my-8"
              >
                {{ $t('about.mission') }}
              </h3>
              <p>
                {{ $t('about.mission') }}
              </p>
            </div>
          </v-col>
        </v-row>

        <SectionsTimeline/>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      heroAlt: [
        {
          src: 'pexels-moose-photos-1036641.jpg',
          heading: ' About Us ',
        },
      ],
      ourTeam: [
        {
          name: this.$t('about.team.member.member1.name'),
          position: this.$t('about.team.member.member1.position'),
          phone: this.$t('about.team.member.member1.phone'),
          email: this.$t('about.team.member.member1.email'),
          photo: this.$t('about.team.member.member1.photo'),
        },
        {
          name: this.$t('about.team.member.member1.name'),
          position: this.$t('about.team.member.member1.position'),
          phone: this.$t('about.team.member.member1.phone'),
          email: this.$t('about.team.member.member1.email'),
          photo: this.$t('about.team.member.member1.photo'),
        },
        {
          name: this.$t('about.team.member.member1.name'),
          position: this.$t('about.team.member.member1.position'),
          phone: this.$t('about.team.member.member1.phone'),
          email: this.$t('about.team.member.member1.email'),
          photo: this.$t('about.team.member.member1.photo'),
        },
        {
          name: this.$t('about.team.member.member1.name'),
          position: this.$t('about.team.member.member1.position'),
          phone: this.$t('about.team.member.member1.phone'),
          email: this.$t('about.team.member.member1.email'),
          photo: this.$t('about.team.member.member1.photo'),
        },
        {
          name: this.$t('about.team.member.member1.name'),
          position: this.$t('about.team.member.member1.position'),
          phone: this.$t('about.team.member.member1.phone'),
          email: this.$t('about.team.member.member1.email'),
          photo: this.$t('about.team.member.member1.photo'),
        },
      ],
    }
  },
  head() {
    return {
      title: 'About Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
              'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
        },
      ],
    }
  },
}
</script>
