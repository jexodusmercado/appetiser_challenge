<template>
    <div class="row">
    	<form name="myform" @submit.prevent="compareDates" id="myForm" class="col-6">
                <label for="input-event">Event Name:</label>
                <b-form-input
                  id="input-event"
                  v-model="event"
                  :state="eventState"
                  aria-describedby="input-event-help input-event-feedback"
                  placeholder="Enter event name"
                  trim
                ></b-form-input>

                <div class="d-flex pt-3">
                    <label for="startDate">Start Date:</label>
                    <datepicker id="startDate"
                    name="startDate"
                    v-model="startDate" 
                    class="pl-2"
                    :disabled-dates="disabledDates"
                    :format="customFormatter"
                    ></datepicker>
                
                    <label for="endDate">End Date:</label>
                    <datepicker
                    id="endDate"
                    name="endDate"
                    class="pl-2"
                    v-model="endDate"
                    :disabled-dates="disabledDates"
                    :format="customFormatter"
                    ></datepicker>
                </div>

                <b-form-group>
                  <b-form-checkbox-group
                    id="checkbox-days"
                    name="days-week"
                    class="pt-2"
                    v-model="selected"
                    :options="options"
                  ></b-form-checkbox-group>
                </b-form-group>

                <button class="btn btn-primary" @click=""> Save </button>
		</form>
        
        <div class="col-6">

    		<h1 class="border-bottom-1">January 2020</h1>
    		<b-list-group>
    		  <b-list-group-item 
    		  class="d-flex w-100 justify-content-between align-items-center"
    		  v-for="(date, index) in dates"
    		  :key="index"
              :value="index"
    		  >
    		    {{ date.date }} {{ date.dayValue}}

    		  <b-badge variant="primary" v-if="date.showEvent" pill>{{ finalevent }}</b-badge>
    		  </b-list-group-item>
    		</b-list-group>
        </div>

	</div>
</template>

<script>
import dayjs from 'dayjs';
import Datepicker from 'vuejs-datepicker';
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween)

  export default {
  	name: "home",

    computed: {
      eventState() {
        return this.event.length > 2 ? true : false
      },
      disabledDates()  {
        return{
            to: new Date(2020, 0, 1),
            from: new Date(2020,0,32),
        }
      },
    },

    data() {
      return {
        dates: [
        {	date: "01", dayValue: "Wed", dateValue: "2020-01-01", showEvent: false},
        {	date: "02", dayValue: "Thurs", dateValue: "2020-01-02", showEvent: false},
        {	date: "03", dayValue: "Fri", dateValue: "2020-01-03", showEvent: false},
        {	date: "04", dayValue: "Sat", dateValue: "2020-01-04", showEvent: false},
        {	date: "05", dayValue: "Sun", dateValue: "2020-01-05", showEvent: false},
        {	date: "06", dayValue: "Mon", dateValue: "2020-01-06", showEvent: false},
        {   date: "07", dayValue: "Tue", dateValue: "2020-01-07", showEvent: false},
        {   date: "08", dayValue: "Wed", dateValue: "2020-01-08", showEvent: false},
        {   date: "09", dayValue: "Thurs", dateValue: "2020-01-09", showEvent: false},
        {   date: "10", dayValue: "Fri", dateValue: "2020-01-10", showEvent: false},
        {   date: "11", dayValue: "Sat", dateValue: "2020-01-11", showEvent: false},
        {   date: "12", dayValue: "Sun", dateValue: "2020-01-12", showEvent: false},
        {   date: "13", dayValue: "Mon", dateValue: "2020-01-13", showEvent: false},
        {   date: "14", dayValue: "Tue", dateValue: "2020-01-14", showEvent: false},
        {   date: "15", dayValue: "Wed", dateValue: "2020-01-15", showEvent: false},
        {   date: "16", dayValue: "Thurs", dateValue: "2020-01-16", showEvent: false},
        {   date: "17", dayValue: "Fri", dateValue: "2020-01-17", showEvent: false},
        {   date: "18", dayValue: "Sat", dateValue: "2020-01-18", showEvent: false},
        {   date: "19", dayValue: "Sun", dateValue: "2020-01-19", showEvent: false},
        {   date: "20", dayValue: "Mon", dateValue: "2020-01-20", showEvent: false},
        {   date: "21", dayValue: "Tue", dateValue: "2020-01-21", showEvent: false},
        {   date: "22", dayValue: "Wed", dateValue: "2020-01-22", showEvent: false},
        {   date: "23", dayValue: "Thurs", dateValue: "2020-01-23", showEvent: false},
        {   date: "24", dayValue: "Fri", dateValue: "2020-01-24", showEvent: false},
        {   date: "25", dayValue: "Sat", dateValue: "2020-01-25", showEvent: false},
        {   date: "26", dayValue: "Sun", dateValue: "2020-01-26", showEvent: false},
        {   date: "27", dayValue: "Mon", dateValue: "2020-01-27", showEvent: false},
        {   date: "28", dayValue: "Tue", dateValue: "2020-01-28", showEvent: false},
        {   date: "29", dayValue: "Wed", dateValue: "2020-01-29", showEvent: false},
        {   date: "30", dayValue: "Thurs", dateValue: "2020-01-30", showEvent: false},
        {	date: "31", dayValue: "Fri", dateValue: "2020-01-31", showEvent: false},
        ],
        event: '',
        finalevent:'',
        startDate: '',
        endDate: '',
        selected: [], // Must be an array reference!
        selectedDate:[] ,
        componentKey: 0,
        options: [
          { text: 'Mon', value: 'Mon' },
          { text: 'Tues', value: 'Tue' },
          { text: 'Wed', value: 'Wed' },
          { text: 'Thurs', value: 'Thu' },
          { text: 'Fri', value: 'Fri' },
          { text: 'Sat', value: 'Sat' },
          { text: 'Sun', value: 'Sun' }
        ]
      }
    }, 
    methods:{
        customFormatter(date) {
            return dayjs(date).format('MM-DD-YYYY');
        },
        compareDates(){ 
            var result = [];
            var start_date = dayjs(this.startDate).format('YYYY-MM-DD');
            var end_date = dayjs(this.endDate).format('YYYY-MM-DD');
            var date_diff = dayjs(end_date).diff(start_date,'day');
            var date_between = dayjs(result).isBetween(start_date, end_date, null, '[');

            for(let datecounter = 0; datecounter <= date_diff; datecounter++ ){
                    var date_convert = dayjs(start_date).add(datecounter,'day');
                    result.push(dayjs(date_convert).format('YYYY-MM-DD'));
            }          

            for(let counter = 0; counter <= this.dates.length; counter++){
                        this.dates[counter].showEvent = false;
                        this.selectedDate = [];
                
                for(let date_counter = 0; date_counter < result.length; date_counter++){

                    if(this.dates[counter].dateValue === result[date_counter]){

                        for(let day_counter = 0; day_counter <= this.selected.length; day_counter++){

                            if(dayjs(result[date_counter]).format('ddd') === this.selected[day_counter]){

                                console.log(true);
                                this.dates[counter].showEvent = true;
            					this.test_method(this.event,this.dates[counter].dateValue)
                                this.finalevent = this.event;
                                // const { data } = window.axios.get('/api/events/create');
                                // console.log(data);
        
                            }

                        }
                        
                    }else{
                        console.log(false);
                    }

                }

            }

    	},
    	test_method(event_val, event_date_val){
    		var currentdate = new dayjs(Date()).format('YYYY-MM-DD H:m:s');
    		var insert = {event: event_val, event_dates: event_date_val, created_at: currentdate};
    		axios.post('api/events/add', insert)
                    .then(function (response) {
                        console.log(insert);
                        this.$router.push("/");
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
    	}

    },
    components:{
        Datepicker
    }

  }

</script>

<style scoped>
 
</style>