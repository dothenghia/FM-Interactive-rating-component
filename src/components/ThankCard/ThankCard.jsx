
import './thankcard.css'
import illustration from '../../assets/images/illustration-thank-you.svg'

const ThankCard = ({ setSubmit, option , setOption}) => {

	return (
		<div className='thank-container'>
			<div className='thank-illustration'>
				<img src={illustration} alt='Thank You'/>
			</div>
			
			<div className='thank-choice'>
				<p>
					You selected {option} out of 5
				</p>
			</div>

			<h1 className='thank-heading'>Thank you!</h1>

			<p className='thank-paragraph'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
			
			<button className='thank-giveFeedback' onClick={() => { setSubmit(false); setOption(0); }}>
				Give other feedback
			</button>
		</div>
	)
}

export default ThankCard