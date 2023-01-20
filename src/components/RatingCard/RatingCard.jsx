
import './ratingcard.css'
import iconStar from '../../assets/images/icon-star.svg'

const RatingCard = ({ setSubmit, option, setOption}) => {
	const activeHandle = (e) => {
		let activeOption = document.getElementsByClassName('active');
		for (let option of activeOption) {
			option.classList.remove('active');
		}

		e.target.classList.add('active');
		setOption(e.target.innerHTML);
	}

	const submitHandle = () => {
		if (option === 0) {
			alert('You have not selected any options')
		} else {
			setSubmit(true)
		}
	}

	return (
		<div className='rating-container'>
			<div className='rating-star'>
				<img src={iconStar} alt='Star Icon'/>
			</div>
			
			<h1 className='rating-heading'>How did we do?</h1>
			
			<p className='rating-paragraph'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
			
			<div className='rating-options'>
				<div className='rating-option' onClick={activeHandle}>1</div>
				<div className='rating-option' onClick={activeHandle}>2</div>
				<div className='rating-option' onClick={activeHandle}>3</div>
				<div className='rating-option' onClick={activeHandle}>4</div>
				<div className='rating-option' onClick={activeHandle}>5</div>
			</div>

			<button className='rating-submitButton' onClick={ submitHandle }>
				Submit
			</button>
		</div>
	)
}

export default RatingCard