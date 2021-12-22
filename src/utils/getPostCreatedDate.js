export const getPostCreatedDate = (postCreated) => {
	const now = new Date();
	const time = new Date(postCreated);
	const year = now.getYear() - time.getYear();
	const month = now.getMonth() - time.getMonth();
	const day = now.getDate() - time.getDate();
	const hour = now.getHours() - time.getHours();
	const minute = now.getMinutes() - time.getMinutes();
	const second = now.getSeconds() - time.getSeconds();
	if (year) {
		return year === 1 ? '1 year ago' : `${year} years ago`;
	} else if (month) {
		return month === 1 ? '1 month ago' : `${month} months ago`;
	} else if (day) {
		return day === 1 ? '1 day ago' : `${day} days ago`;
	} else if (hour) {
		return hour === 1 ? '1 hour ago' : `${hour} hours ago`;
	} else if (minute) {
		return minute === 1 ? '1 minute ago' : `${minute} minutes ago`;
	} else {
		return second === 1 ? '1 second ago' : `${second} seconds ago`;
	}
};
