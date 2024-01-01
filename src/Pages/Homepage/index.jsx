import React from 'react';
import Header from '../../CommonComponent/Header/header';
import {Container, Row, Col, Image, InputGroup, Form, Button} from 'react-bootstrap';
import { BannerImage, Coach1, Coach2, Coach3, Coach4, FinessHand, HowToUseImg, FitnessVideo } from '../../asset/img';
import OurUltimatePlans from '../Components/HomepageTab/ourUltimatePlans';

import ExperienceSlider from '../Components/CustomerExperience/slider';

import './homepage.scss';

function Homepage() {
	return (
		<>
			<Header/>
			<section className="banner_section">
				<Container>
					<div className="banner_inner_section">
						<Row>
							<Col xxl="6" lg="6" md="12" xs="12">
								<div className="content_section">
									<label>#GetFit</label>
									<h1>Your Personal <span>Health</span> & <span>Fitness</span> Coach</h1>
									<p>Personalised Health Plans, 3 Coach Support,  360° Approach with Diet, Workout, Yoga & Naturopathy, Unlimited Expert Consultations</p>
									<InputGroup className="mb-3 enter_mobile_button">
										<Form.Control
											placeholder="Enter Mobile Number"
											aria-label="Recipient's username"
											aria-describedby="basic-addon2"
											type="number"
										/>
										<Button variant="outline-secondary" id="button-addon2" className="input_button global_button">
											Get Started
										</Button>
									</InputGroup>
								</div>
							</Col>
							<Col xxl="6" lg="6" md="12" xs="12">
								<div className="img_section">
									<div className="step_board">
										<div className="svg_icons">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
												<path d="M12.2407 0L14.9349 8.2918H23.6534L16.6 13.4164L19.2941 21.7082L12.2407 16.5836L5.1873 21.7082L7.88147 13.4164L0.828045 8.2918H9.54655L12.2407 0Z" fill="#F7BE2D" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none">
												<path fillRule="evenodd" clipRule="evenodd" d="M7.48643 0.00371671C6.13756 -0.110264 5.83057 2.42817 5.83057 3.38132H16.1934C16.3477 2.43915 15.8541 0.00371671 14.538 0.00371671H7.48643ZM1.28024 5.19582C0.637031 5.82827 0.27195 6.6861 0.26416 7.58318H21.7594C21.7515 6.68614 21.3865 5.82837 20.7433 5.19595C20.1002 4.56354 19.2307 4.20752 18.3238 4.20508H3.69977C2.79287 4.20739 1.92344 4.56338 1.28024 5.19582ZM10.196 12.3514C10.196 12.3514 10.4571 9.11492 8.18428 9.15466L0.240723 9.15568V9.15938C0.243242 10.0085 0.586672 10.8219 1.19537 11.4206C1.80408 12.0193 2.62826 12.3542 3.48664 12.3519H6.76043V21.6215C6.76836 22.5185 7.13359 23.3762 7.77676 24.0086C8.41994 24.6411 9.28918 24.9971 10.196 24.9996V12.3514ZM13.7303 9.15466C11.4576 9.11492 11.7186 12.3514 11.7186 12.3514V24.9996C12.6255 24.9971 13.4949 24.641 14.1381 24.0085C14.7813 23.376 15.1464 22.5181 15.1542 21.621V12.3514H18.4313C19.2896 12.3536 20.1135 12.0185 20.7221 11.4198C21.3307 10.8211 21.674 10.0078 21.6765 9.15874V9.15466H13.735H13.7303Z" fill="url(#paint0_linear_690_43449)" />
												<defs>
													<linearGradient id="paint0_linear_690_43449" x1="4.1615" y1="6.5018e-07" x2="23.1706" y2="3.17554" gradientUnits="userSpaceOnUse">
														<stop stopColor="#59DF74" />
														<stop offset="1" stopColor="#15C0B6" />
													</linearGradient>
												</defs>
											</svg>
										</div>
										<p>3 Simple Steps to your Goal</p>
									</div>
									<Image className="img-fluid" src={BannerImage} alt="ToponFirBanner" />
								</div>
							</Col>
						</Row>
					</div>	
				</Container>
			</section>

			<section className="our_ultimate_plans">
				<div className="heading">
					<h4>Our Ultimate Plans</h4>
					<svg xmlns="http://www.w3.org/2000/svg" width="145" height="10" viewBox="0 0 145 10" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M128.264 1.301C109.034 0.163069 71.7534 -0.347839 52.2231 0.255962C33.6635 0.836539 11.822 2.78728 2.41498 2.78728C-0.0580828 2.78728 -0.219896 2.8105 0.149908 3.18207C0.704615 3.73943 5.23474 3.85554 13.2318 3.50719C19.4261 3.25174 19.5647 3.25175 20.5355 3.71621C21.5062 4.18067 21.668 4.18067 27.4924 3.94844C38.8639 3.48398 46.7916 2.97307 50.0274 2.99629C52.9627 3.01951 53.4481 3.43753 47.9703 3.69298C35.2583 4.32001 35.1196 4.34323 35.9517 5.15604C36.3215 5.52761 36.8069 5.57405 41.1059 5.50438C45.8209 5.43471 45.6591 5.3186 46.2138 5.85273C46.5836 6.20108 47.0689 6.38686 47.5774 6.41008C51.4835 6.45653 62.4852 6.71199 62.4852 6.71199C59.4805 6.80488 55.8056 7.10678 55.6207 7.29256C54.7886 8.12859 55.8749 8.19826 69.6964 8.40727C85.2513 8.61628 97.0388 9.40586 98.518 9.96322C98.8878 10.1026 99.0958 9.82388 98.8416 9.49876C97.9633 8.4305 83.2404 8.08215 77.1618 7.75703C75.9137 7.68736 75.1279 7.26934 78.4561 7.15322C86.3607 6.89777 83.5178 6.08496 82.6626 6.01529C81.507 5.9224 78.849 5.94562 72.285 5.8295C69.1185 5.78306 70.3666 5.38827 72.4237 5.36504C91.4224 5.10959 94.1728 5.27215 94.1728 5.15604C94.1728 4.38967 93.5025 4.29679 85.1126 4.18067C77.6934 4.06455 79.3806 3.60009 84.1187 3.57687C91.0988 3.55365 104.481 3.78587 104.666 3.50719C105.036 2.88017 104.065 2.48538 101.823 2.32282C98.31 2.06737 112.455 2.34604 122.694 2.71761C141.808 3.4143 144.998 4.20389 144.998 3.4143C145.044 2.32282 144.512 2.25315 128.264 1.301Z" fill="url(#paint0_linear_918_29947)" />
						<defs>
							<linearGradient id="paint0_linear_918_29947" x1="26.4195" y1="2.60077e-07" x2="41.1814" y2="41.5415" gradientUnits="userSpaceOnUse">
								<stop stopColor="#59DF74" />
								<stop offset="1" stopColor="#15C0B6" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<Container>
					<Row>
						<Col xxl="12" lg="12" md="12" sm="12" xs="12">
							<div className="ultimate_plan_column_1">
								<OurUltimatePlans/>
							</div>
							<div className="claim_button">
								<button className="btn btn-primary global_button">Claim your Offer</button>
							</div>
						</Col> 
					</Row>
				</Container>
			</section>

			<section className="customer_experience">
				<div className="heading">
					<h4>Customer Experiences</h4>
					<svg xmlns="http://www.w3.org/2000/svg" width="145" height="10" viewBox="0 0 145 10" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M128.264 1.301C109.034 0.163069 71.7534 -0.347839 52.2231 0.255962C33.6635 0.836539 11.822 2.78728 2.41498 2.78728C-0.0580828 2.78728 -0.219896 2.8105 0.149908 3.18207C0.704615 3.73943 5.23474 3.85554 13.2318 3.50719C19.4261 3.25174 19.5647 3.25175 20.5355 3.71621C21.5062 4.18067 21.668 4.18067 27.4924 3.94844C38.8639 3.48398 46.7916 2.97307 50.0274 2.99629C52.9627 3.01951 53.4481 3.43753 47.9703 3.69298C35.2583 4.32001 35.1196 4.34323 35.9517 5.15604C36.3215 5.52761 36.8069 5.57405 41.1059 5.50438C45.8209 5.43471 45.6591 5.3186 46.2138 5.85273C46.5836 6.20108 47.0689 6.38686 47.5774 6.41008C51.4835 6.45653 62.4852 6.71199 62.4852 6.71199C59.4805 6.80488 55.8056 7.10678 55.6207 7.29256C54.7886 8.12859 55.8749 8.19826 69.6964 8.40727C85.2513 8.61628 97.0388 9.40586 98.518 9.96322C98.8878 10.1026 99.0958 9.82388 98.8416 9.49876C97.9633 8.4305 83.2404 8.08215 77.1618 7.75703C75.9137 7.68736 75.1279 7.26934 78.4561 7.15322C86.3607 6.89777 83.5178 6.08496 82.6626 6.01529C81.507 5.9224 78.849 5.94562 72.285 5.8295C69.1185 5.78306 70.3666 5.38827 72.4237 5.36504C91.4224 5.10959 94.1728 5.27215 94.1728 5.15604C94.1728 4.38967 93.5025 4.29679 85.1126 4.18067C77.6934 4.06455 79.3806 3.60009 84.1187 3.57687C91.0988 3.55365 104.481 3.78587 104.666 3.50719C105.036 2.88017 104.065 2.48538 101.823 2.32282C98.31 2.06737 112.455 2.34604 122.694 2.71761C141.808 3.4143 144.998 4.20389 144.998 3.4143C145.044 2.32282 144.512 2.25315 128.264 1.301Z" fill="url(#paint0_linear_918_29947)" />
						<defs>
							<linearGradient id="paint0_linear_918_29947" x1="26.4195" y1="2.60077e-07" x2="41.1814" y2="41.5415" gradientUnits="userSpaceOnUse">
								<stop stopColor="#59DF74" />
								<stop offset="1" stopColor="#15C0B6" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<ExperienceSlider/>
			</section>

			<section className="our_coaches">
				<div className="heading">
					<h4>Our Coaches</h4>
					<svg xmlns="http://www.w3.org/2000/svg" width="145" height="10" viewBox="0 0 145 10" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M128.264 1.301C109.034 0.163069 71.7534 -0.347839 52.2231 0.255962C33.6635 0.836539 11.822 2.78728 2.41498 2.78728C-0.0580828 2.78728 -0.219896 2.8105 0.149908 3.18207C0.704615 3.73943 5.23474 3.85554 13.2318 3.50719C19.4261 3.25174 19.5647 3.25175 20.5355 3.71621C21.5062 4.18067 21.668 4.18067 27.4924 3.94844C38.8639 3.48398 46.7916 2.97307 50.0274 2.99629C52.9627 3.01951 53.4481 3.43753 47.9703 3.69298C35.2583 4.32001 35.1196 4.34323 35.9517 5.15604C36.3215 5.52761 36.8069 5.57405 41.1059 5.50438C45.8209 5.43471 45.6591 5.3186 46.2138 5.85273C46.5836 6.20108 47.0689 6.38686 47.5774 6.41008C51.4835 6.45653 62.4852 6.71199 62.4852 6.71199C59.4805 6.80488 55.8056 7.10678 55.6207 7.29256C54.7886 8.12859 55.8749 8.19826 69.6964 8.40727C85.2513 8.61628 97.0388 9.40586 98.518 9.96322C98.8878 10.1026 99.0958 9.82388 98.8416 9.49876C97.9633 8.4305 83.2404 8.08215 77.1618 7.75703C75.9137 7.68736 75.1279 7.26934 78.4561 7.15322C86.3607 6.89777 83.5178 6.08496 82.6626 6.01529C81.507 5.9224 78.849 5.94562 72.285 5.8295C69.1185 5.78306 70.3666 5.38827 72.4237 5.36504C91.4224 5.10959 94.1728 5.27215 94.1728 5.15604C94.1728 4.38967 93.5025 4.29679 85.1126 4.18067C77.6934 4.06455 79.3806 3.60009 84.1187 3.57687C91.0988 3.55365 104.481 3.78587 104.666 3.50719C105.036 2.88017 104.065 2.48538 101.823 2.32282C98.31 2.06737 112.455 2.34604 122.694 2.71761C141.808 3.4143 144.998 4.20389 144.998 3.4143C145.044 2.32282 144.512 2.25315 128.264 1.301Z" fill="url(#paint0_linear_918_29947)" />
						<defs>
							<linearGradient id="paint0_linear_918_29947" x1="26.4195" y1="2.60077e-07" x2="41.1814" y2="41.5415" gradientUnits="userSpaceOnUse">
								<stop stopColor="#59DF74" />
								<stop offset="1" stopColor="#15C0B6" />
							</linearGradient>
						</defs>
					</svg>
					<p>India's top coaches with extensive experience in nutrition, fitness and naturopathy are here to simplify your health journey!</p>
				</div>
				<Container>
					<Row>
						<Col xxl="3" lg="6" md="12" sm="12" xs="12">
							<div className="coach_section">
								<Image className="img-fluid" src={Coach1} alt="Coach_img_1"/>
								<div className="coach_content">
									<h6>Diet Coach</h6>
									<h5>5 Years Expertise</h5>
									<p>We optimise your diet with calorie-counted region-based meals and make healthy eating fun and easy!</p>
								</div>
							</div>
						</Col> 
						<Col xxl="3" lg="6" md="12" sm="12" xs="12">
							<div className="coach_section">
								<Image className="img-fluid" src={Coach2} alt="Coach_img_1" />
								<div className="coach_content">
									<h6>Fitness Coach</h6>
									<h5>10 Years Expertise</h5>
									<p>Let’s conquer your goals with a fresh and exciting mix of home and gym workout plans and achieve your dream body!</p>
								</div>
							</div>
						</Col> 
						<Col xxl="3" lg="6" md="12" sm="12" xs="12">
							<div className="coach_section">
								<Image className="img-fluid" src={Coach3} alt="Coach_img_1" />
								<div className="coach_content">
									<h6>Yoga Coach</h6>
									<h5>7 Years Expertise</h5>
									<p>With scientific yogic and naturopathic practices, let’s achieve your mental and physical well-being together. </p>
								</div>
							</div>
						</Col> 
						<Col xxl="3" lg="6" md="12" sm="12" xs="12">
							<div className="coach_section">
								<Image className="img-fluid" src={Coach4} alt="Coach_img_1" />
								<div className="coach_content">
									<h6>Expert Consultants</h6>
									<h5>8 Years Expertise</h5>
									<p>Feeling stuck? Let’s talk it out! We are here for unlimited consultations throughout your health journey!</p>
								</div>
							</div>
						</Col> 
					</Row>
					<Row>
						<Col xxl="12" lg="12" md="12" xs="12">
							<div className="common_button">
								<button className="btn btn-primary global_button">Ask the Expert</button>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="fitness_in_hands">
				<Container>
					<div className="fitness_hands_column">
						<div className="content">
							<h4>Take Your <span>Fitness</span> in Your Hands</h4>
							<ul>
								<li>
									<span>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<circle cx="12" cy="12" r="12" fill="url(#paint0_linear_778_28867)" />
											<path d="M7.5 12.5L10.1471 15L16.5 9" stroke="white" strokeWidth="1.5" stroke-linecap="round" />
											<defs>
												<linearGradient id="paint0_linear_778_28867" x1="4.37288" y1="6.24184e-07" x2="25.3745" y2="4.07592" gradientUnits="userSpaceOnUse">
													<stop stop-color="#59DF74" />
													<stop offset="1" stop-color="#15C0B6" />
												</linearGradient>
											</defs>
										</svg>
									</span>
									<span>Weight loss, muscle gain, & holistic wellness Plans.</span>
								</li>
								<li>
									<span>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<circle cx="12" cy="12" r="12" fill="url(#paint0_linear_778_28867)" />
											<path d="M7.5 12.5L10.1471 15L16.5 9" stroke="white" strokeWidth="1.5" stroke-linecap="round" />
											<defs>
												<linearGradient id="paint0_linear_778_28867" x1="4.37288" y1="6.24184e-07" x2="25.3745" y2="4.07592" gradientUnits="userSpaceOnUse">
													<stop stop-color="#59DF74" />
													<stop offset="1" stop-color="#15C0B6" />
												</linearGradient>
											</defs>
										</svg>
									</span>
									<span>1, 2 & 3 coach plans with assured results.</span>
								</li>
								<li>
									<span>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<circle cx="12" cy="12" r="12" fill="url(#paint0_linear_778_28867)" />
											<path d="M7.5 12.5L10.1471 15L16.5 9" stroke="white" strokeWidth="1.5" stroke-linecap="round" />
											<defs>
												<linearGradient id="paint0_linear_778_28867" x1="4.37288" y1="6.24184e-07" x2="25.3745" y2="4.07592" gradientUnits="userSpaceOnUse">
													<stop stop-color="#59DF74" />
													<stop offset="1" stop-color="#15C0B6" />
												</linearGradient>
											</defs>
										</svg>
									</span>
									<span>Experienced diet, fitness, yoga And naturopathy experts.</span>
								</li>
								<li>
									<span>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<circle cx="12" cy="12" r="12" fill="url(#paint0_linear_778_28867)" />
											<path d="M7.5 12.5L10.1471 15L16.5 9" stroke="white" strokeWidth="1.5" stroke-linecap="round" />
											<defs>
												<linearGradient id="paint0_linear_778_28867" x1="4.37288" y1="6.24184e-07" x2="25.3745" y2="4.07592" gradientUnits="userSpaceOnUse">
													<stop stop-color="#59DF74" />
													<stop offset="1" stop-color="#15C0B6" />
												</linearGradient>
											</defs>
										</svg>
									</span>
									<span>Personalised region-based diet plans.</span>
								</li>
								<li>
									<span>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<circle cx="12" cy="12" r="12" fill="url(#paint0_linear_778_28867)" />
											<path d="M7.5 12.5L10.1471 15L16.5 9" stroke="white" strokeWidth="1.5" stroke-linecap="round" />
											<defs>
												<linearGradient id="paint0_linear_778_28867" x1="4.37288" y1="6.24184e-07" x2="25.3745" y2="4.07592" gradientUnits="userSpaceOnUse">
													<stop stop-color="#59DF74" />
													<stop offset="1" stop-color="#15C0B6" />
												</linearGradient>
											</defs>
										</svg>
									</span>
									<span>Pause anytime and easy food swap option.</span>
								</li>
								<li>
									<span>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<circle cx="12" cy="12" r="12" fill="url(#paint0_linear_778_28867)" />
											<path d="M7.5 12.5L10.1471 15L16.5 9" stroke="white" strokeWidth="1.5" stroke-linecap="round" />
											<defs>
												<linearGradient id="paint0_linear_778_28867" x1="4.37288" y1="6.24184e-07" x2="25.3745" y2="4.07592" gradientUnits="userSpaceOnUse">
													<stop stop-color="#59DF74" />
													<stop offset="1" stop-color="#15C0B6" />
												</linearGradient>
											</defs>
										</svg>
									</span>
									<span>Track progress at your fingertips anytime, anywhere.</span>
								</li>
								<li>
									<span>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<circle cx="12" cy="12" r="12" fill="url(#paint0_linear_778_28867)" />
											<path d="M7.5 12.5L10.1471 15L16.5 9" stroke="white" strokeWidth="1.5" stroke-linecap="round" />
											<defs>
												<linearGradient id="paint0_linear_778_28867" x1="4.37288" y1="6.24184e-07" x2="25.3745" y2="4.07592" gradientUnits="userSpaceOnUse">
													<stop stop-color="#59DF74" />
													<stop offset="1" stop-color="#15C0B6" />
												</linearGradient>
											</defs>
										</svg>
									</span>
									<span>Free calorie, water, sleep & steps tracker.</span>
								</li>
								<li>
									<span>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<circle cx="12" cy="12" r="12" fill="url(#paint0_linear_778_28867)" />
											<path d="M7.5 12.5L10.1471 15L16.5 9" stroke="white" strokeWidth="1.5" stroke-linecap="round" />
											<defs>
												<linearGradient id="paint0_linear_778_28867" x1="4.37288" y1="6.24184e-07" x2="25.3745" y2="4.07592" gradientUnits="userSpaceOnUse">
													<stop stop-color="#59DF74" />
													<stop offset="1" stop-color="#15C0B6" />
												</linearGradient>
											</defs>
										</svg>
									</span>
									<span>Plans starting from 7 days.</span>
								</li>
							</ul>
						</div>
							
						<div className="img">
							<Image className="img-fluid" src={FinessHand} alt="Fitness Hand Image"/>
						</div>	
					</div>	
				</Container>
			</section>

			<section className="how_to_use">
				<div className="heading">
					<h4>How To Use ToneOp Fit?</h4>
					<svg xmlns="http://www.w3.org/2000/svg" width="145" height="10" viewBox="0 0 145 10" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M128.264 1.301C109.034 0.163069 71.7534 -0.347839 52.2231 0.255962C33.6635 0.836539 11.822 2.78728 2.41498 2.78728C-0.0580828 2.78728 -0.219896 2.8105 0.149908 3.18207C0.704615 3.73943 5.23474 3.85554 13.2318 3.50719C19.4261 3.25174 19.5647 3.25175 20.5355 3.71621C21.5062 4.18067 21.668 4.18067 27.4924 3.94844C38.8639 3.48398 46.7916 2.97307 50.0274 2.99629C52.9627 3.01951 53.4481 3.43753 47.9703 3.69298C35.2583 4.32001 35.1196 4.34323 35.9517 5.15604C36.3215 5.52761 36.8069 5.57405 41.1059 5.50438C45.8209 5.43471 45.6591 5.3186 46.2138 5.85273C46.5836 6.20108 47.0689 6.38686 47.5774 6.41008C51.4835 6.45653 62.4852 6.71199 62.4852 6.71199C59.4805 6.80488 55.8056 7.10678 55.6207 7.29256C54.7886 8.12859 55.8749 8.19826 69.6964 8.40727C85.2513 8.61628 97.0388 9.40586 98.518 9.96322C98.8878 10.1026 99.0958 9.82388 98.8416 9.49876C97.9633 8.4305 83.2404 8.08215 77.1618 7.75703C75.9137 7.68736 75.1279 7.26934 78.4561 7.15322C86.3607 6.89777 83.5178 6.08496 82.6626 6.01529C81.507 5.9224 78.849 5.94562 72.285 5.8295C69.1185 5.78306 70.3666 5.38827 72.4237 5.36504C91.4224 5.10959 94.1728 5.27215 94.1728 5.15604C94.1728 4.38967 93.5025 4.29679 85.1126 4.18067C77.6934 4.06455 79.3806 3.60009 84.1187 3.57687C91.0988 3.55365 104.481 3.78587 104.666 3.50719C105.036 2.88017 104.065 2.48538 101.823 2.32282C98.31 2.06737 112.455 2.34604 122.694 2.71761C141.808 3.4143 144.998 4.20389 144.998 3.4143C145.044 2.32282 144.512 2.25315 128.264 1.301Z" fill="url(#paint0_linear_918_29947)" />
						<defs>
							<linearGradient id="paint0_linear_918_29947" x1="26.4195" y1="2.60077e-07" x2="41.1814" y2="41.5415" gradientUnits="userSpaceOnUse">
								<stop stopColor="#59DF74" />
								<stop offset="1" stopColor="#15C0B6" />
							</linearGradient>
						</defs>
					</svg>
					<p>Reach your health goals with personalised solutions at your fingertips.</p>
				</div>
				<Container>
					<div className="how_to_use_internal_section">
						<Row>
							<Col xxl="6" lg="6" md="12" xs="12">
								<div className="how_to_use_steps">
									<label>Step 1</label>
									<h4>Download ToneOp Fit</h4>
									<p>Download the ToneOp Fit application from the Play Store or App Store and log in with your mobile number.</p>
								</div>
								<div className="how_to_use_steps">
									<label>Step 2</label>
									<h4>Choose Your Goal</h4>
									<p>Explore our Weight Management, Active Fitness, or Holistic Wellness plans to choose your goal.</p>
								</div>
								<div className="how_to_use_steps">
									<label>Step 3</label>
									<h4>Start with a Free Consultation</h4>
									<p>Get a free expert consultation for personal guidance and start your health journey with ToneOp Fit.</p>
								</div>
							</Col>
							<Col xxl="6" md="12"xs="12">
								<div className="how_to_use_img">
									<div className="step_board">
										<div className="svg_icons">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
												<path d="M12.2407 0L14.9349 8.2918H23.6534L16.6 13.4164L19.2941 21.7082L12.2407 16.5836L5.1873 21.7082L7.88147 13.4164L0.828045 8.2918H9.54655L12.2407 0Z" fill="#F7BE2D" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none">
												<path fillRule="evenodd" clipRule="evenodd" d="M7.48643 0.00371671C6.13756 -0.110264 5.83057 2.42817 5.83057 3.38132H16.1934C16.3477 2.43915 15.8541 0.00371671 14.538 0.00371671H7.48643ZM1.28024 5.19582C0.637031 5.82827 0.27195 6.6861 0.26416 7.58318H21.7594C21.7515 6.68614 21.3865 5.82837 20.7433 5.19595C20.1002 4.56354 19.2307 4.20752 18.3238 4.20508H3.69977C2.79287 4.20739 1.92344 4.56338 1.28024 5.19582ZM10.196 12.3514C10.196 12.3514 10.4571 9.11492 8.18428 9.15466L0.240723 9.15568V9.15938C0.243242 10.0085 0.586672 10.8219 1.19537 11.4206C1.80408 12.0193 2.62826 12.3542 3.48664 12.3519H6.76043V21.6215C6.76836 22.5185 7.13359 23.3762 7.77676 24.0086C8.41994 24.6411 9.28918 24.9971 10.196 24.9996V12.3514ZM13.7303 9.15466C11.4576 9.11492 11.7186 12.3514 11.7186 12.3514V24.9996C12.6255 24.9971 13.4949 24.641 14.1381 24.0085C14.7813 23.376 15.1464 22.5181 15.1542 21.621V12.3514H18.4313C19.2896 12.3536 20.1135 12.0185 20.7221 11.4198C21.3307 10.8211 21.674 10.0078 21.6765 9.15874V9.15466H13.735H13.7303Z" fill="url(#paint0_linear_690_43449)" />
												<defs>
													<linearGradient id="paint0_linear_690_43449" x1="4.1615" y1="6.5018e-07" x2="23.1706" y2="3.17554" gradientUnits="userSpaceOnUse">
														<stop stopColor="#59DF74" />
														<stop offset="1" stopColor="#15C0B6" />
													</linearGradient>
												</defs>
											</svg>
										</div>
										<p>3 Simple Steps to your Goal</p>
									</div>
									<Image className="img-fluid" src={HowToUseImg} alt="ow to Use"/>
								</div>
							</Col>
						</Row>
						<Row>
							<Col xxl="12" lg="12" md="12" xs="12">
								<div className="common_button">
									<button className="btn btn-primary global_button">Free Consultation</button>
								</div>
							</Col>
						</Row>
					</div>	
				</Container>
			</section>

			<section className="transform_body">
				<Container>
					<Row>
						<Col xxl="6" lg="12" xs="12">
							<div className="transform_health_heading">
								<h4>No More Excuses! Let’s Transform Your Health Together!</h4>
								<button className="btn btn-primary global_button">Download Our App</button>
							</div>
						</Col>
						<Col xxl="6" lg="12" xs="12">
							<div className="transform_health_paragraph">
								<div className="content">
									<p>Get ready to witness the best version of yourself with the most experienced team of diet, fitness and yoga coaches. Track your progress, log your meals, and stay on track with unlimited expert consultations.</p>
								</div>	
								<div className="achievements">
									<div className="content_1">
										<h4>50k+</h4>
										<h6>Transformation</h6>
									</div>
									<div className="content_1">
										<h4>100k+</h4>
										<h6>Clients</h6>
									</div>
									<div className="content_1">
										<h4>20k+</h4>
										<h6>Active Users</h6>
									</div>
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col xxl="4" lg="6" md="12" xs="12">
							<div className="transform_1">
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z" stroke="#15C06E" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M17.25 8.28998C14.26 5.62998 9.74 5.62998 6.75 8.28998L8.93 11.79C10.68 10.23 13.32 10.23 15.07 11.79L17.25 8.28998Z" stroke="#15C06E" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</span>
								<span>
									<h4>Weight Management Plans</h4>
									<p>Manage weight with Weight Loss, Intermittent Fasting, and Detox Diet Plans.</p>
								</span>
							</div>
							<div className="transform_1">
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path d="M16.2 10C16.2 10 16 11 13 15C10.1 18.8 14.3 21.6 14.8 22H14.9C15.5 21.5 23.1 16.7 16.2 10Z" stroke="#15C06E" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M13.8001 7.80001C13.8001 5.50001 12.9001 3.40001 12.0001 2.20001C11.7001 1.90001 11.2001 2.00001 11.1001 2.40001C10.7001 3.90001 9.50005 7.10001 6.60005 10.9C2.90005 15.7 6.30005 20.9 9.80005 21.9C11.7001 22.4 9.30005 20.9 9.00005 17.8C8.70005 13.9 13.8001 11 13.8001 7.80001Z" stroke="#15C06E" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</span>
								<span>
									<h4>Weight Management Plans</h4>
									<p>Manage weight with Weight Loss, Intermittent Fasting, and Detox Diet Plans.</p>
								</span>
							</div>
							<div className="transform_1">
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path d="M8 2V5" stroke="#15C06E" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M16 2V5" stroke="#15C06E" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M3.5 9.08997H20.5" stroke="#15C06E" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#15C06E" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M11.9955 13.7H12.0045" stroke="#15C06E" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M8.29431 13.7H8.30329" stroke="#15C06E" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M8.29431 16.7H8.30329" stroke="#15C06E" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</span>
								<span>
									<h4>Weight Management Plans</h4>
									<p>Manage weight with Weight Loss, Intermittent Fasting, and Detox Diet Plans.</p>
								</span>
							</div>
						</Col>
						<Col xxl="8" lg="6" md="12" xs="12">
							<iframe className="embed-responsive-item" title="UniqueTitleForIframe" src={FitnessVideo} allowFullScreen></iframe>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	)
}

export default Homepage;