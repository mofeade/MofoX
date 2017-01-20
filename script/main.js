//set variables for images, headline, subtext, main content & an empty variable called appliedClass

(function () {
	var theImgs = document.querySelectorAll('.image-holder'),
		Heading = document.querySelector('.heading'),
		SubText = document.querySelector('.main-copy h2'),
		SeasonText = document.querySelector('.main-copy p'),
		appliedClass;




	function changeElements() {
		SubText.classList.remove(appliedClass);
		Heading.classList.remove(appliedClass);

		//change colour
		SubText.classList.add(this.id);
		Heading.classList.add(this.id);

		appliedClass = this.id;

		//take the id of the clicked element, use it to retrieve the correct content and then replace the content on the page
		SubText.firstChild.nodeValue = dynamicContent[this.id].headline;
		SeasonText.firstChild.nodeValue = dynamicContent[this.id].text;
		
	}


		[].forEach.call(theImgs, function (image) {
			image.addEventListener('click', changeElements, false);
		});
})();


//load the content when page loads 
		SubText.firstChild.nodeValue = dynamicContent[spring].headline;
		SeasonText.firstChild.nodeValue = dynamicContent[spring].text;
		Heading.classList.add('spring');