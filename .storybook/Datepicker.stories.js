import vuejsDatepicker from 'vuejs-datepicker'

export default { title: 'Datepicker' }
export const highlightedDatepicker = () => ({
  components: { vuejsDatepicker },
  data() {
    return {
      inline: true,
      highlighted: {
        from: new Date(2020, 5, 5), // Highlight all dates after specific date
        to: new Date(2020, 5, 10), // Highlight all dates up to specific date
        days: [6, 0], // Highlight Saturday's and Sunday's
      }
    }
  },
  template: '<vuejs-datepicker :inline="inline" :highlighted="highlighted"></vuejs-datepicker>'
})
