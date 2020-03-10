// Vuex

<template>
	<div>
        <div class="card fz-0">
            <div class="row">
                <div class="inputGroup width-half">
                    <input type="text" id="input-start-rent" v-model="book.rentCar.startLocation"/>
                    <label for="input-start-rent" class="">租車地</label>
                </div>
                <div class="inputGroup width-half">
                    <input type="text" id="input-end-rent" v-model="book.rentCar.endLocation"/>
                    <label for="input-end-rent" class="">還車地</label>
                </div>
            </div>
            <div class="row">
                <div class="inputGroup width-half">
                    <input type="date" value="" v-model="book.rentCar.startDate"/>
                    <label class="">租車日</label>
                </div>
                <div class="inputGroup width-half">
                    <input type="time" id="input-start-time-rentCar" v-model="book.rentCar.startTime"/>
                    <label for="input-start-time-rentCar" class="">租車時間</label>
                </div>
            </div>
            <div class="row">
                <div class="inputGroup width-half">
                    <input type="date" value="" v-model="book.rentCar.endDate"/>
                    <label class="">還車日</label>
                </div>
                <div class="inputGroup width-half">
                    <input type="time" id="input-end-time-rentCar" v-model="book.rentCar.endTime"/>
                    <label for="input-end-time-rentCar" class="">還車時間</label>
                </div>
            </div>
            <div class="row">
                <div class="inputGroup">
                    <input type="text" id="input-car" v-model="book.rentCar.preferCar"/>
                    <label for="input-car" class="">指定車款</label>
                </div>
            </div>
        </div>
	</div>
</template>

<script>

export default {
	name: 'app',
	component:{
		
	},
	data() {
		return {
			book:{
				rentCar:{
					startLocation: '',
					endLocation: '',
                    startDate: '',
                    startDay: '',
					endDate: '',
					endDay: '',
					startTime: '',
					endTime: '',
					preferCar: ''
				}
			},
		}
	},
	computed:{
        startDayFn(){
            let dayIndex = new Date(this.book.rentCar.startDate).getDay();
            return `週${['日', '一', '二', '三', '四', '五', '六'][dayIndex]}`;
        },
        endDayFn(){
            let dayIndex = new Date(this.book.rentCar.endDate).getDay();
            return `週${['日', '一', '二', '三', '四', '五', '六'][dayIndex]}`;
        }
    },
    watch: {
        startDayFn() {
            this.book.rentCar.startDay = this.startDayFn
        },
        endDayFn() {
            this.book.rentCar.endDay = this.endDayFn
        },
    },
	methods:{

	}
}
</script>