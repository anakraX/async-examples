'use strict';
const async=require('async');
const moment=require('moment');

/** ARRAY OF JOBS SPECIALIZED for ASYNC SERIES
 *  the functions listed must have 1 parameter that is (callback)
 *  as only when the function return it's callback, then the function is considered done
 *  in ASYNC.series, the function will be executed one by one in sequence, 
 *  you can see the anonymous function that holds the next function from being executed in 3000 ms
 */
let jobs=[
	print_hahaha,
	(callback)=>{
		setTimeout(()=>{
			return callback(null);
		},3000);
	},
	print_hohoho
];


/** PRINTING WORD HAHAHA
 * example of a function that prints HAHAHA to your console log
 * @callback {any} error : contains the error message or error value, 
 * when the value is not null, then the async.series process will be stopped immediately with the error value is being returned to 'async_error'
 */
function print_hahaha(callback){
	let error=null;
	console.log('HAHAHA');
	return callback(error);
}

/** PRINTING WORD HOHOHO
 * example of a function that prints HOHOHO to your console log
 * @callback {any} error : contains the error message or error value, 
 * when the value is not null, then the async.series process will be stopped immediately with the error value is being returned to 'async_error'
 */
function print_hohoho(callback){
        let error=null;
        console.log('HOHOHO');
        return callback(error);
}

/** RUN THE ASYNC SERIES JOBS
 *  runs the function listed in the jobs parameter array, 
 *  async.series runs the function in sequence like SYNCHRONOUS programming language, 
 *  so only when the first function has returned it's callback with callback(null); <- error is null 
 *  then the second function (in jobs array) will execute
 *  @param {ARRAY} jobs : array of function to execute
 */
function run_async_series(jobs){
	let time_start=moment();
	console.log('async jobs begin',time_start);

	async.series(jobs,(async_error,async_result)=>{
		let time_stop=moment();
		console.log('async returns error',async_error);
		console.log('async jobs stops',time_stop);
	});
}
