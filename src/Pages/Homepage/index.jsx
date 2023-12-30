import React from 'react';
import Header from '../../CommonComponent/Header/header';
import {Container, Row, Col, Image, InputGroup, Form, Button} from 'react-bootstrap';
import { BannerImage, Ultimate1 } from '../../asset/img';
import {HomepageData} from './homepageData';

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
												<path fill-rule="evenodd" clip-rule="evenodd" d="M7.48643 0.00371671C6.13756 -0.110264 5.83057 2.42817 5.83057 3.38132H16.1934C16.3477 2.43915 15.8541 0.00371671 14.538 0.00371671H7.48643ZM1.28024 5.19582C0.637031 5.82827 0.27195 6.6861 0.26416 7.58318H21.7594C21.7515 6.68614 21.3865 5.82837 20.7433 5.19595C20.1002 4.56354 19.2307 4.20752 18.3238 4.20508H3.69977C2.79287 4.20739 1.92344 4.56338 1.28024 5.19582ZM10.196 12.3514C10.196 12.3514 10.4571 9.11492 8.18428 9.15466L0.240723 9.15568V9.15938C0.243242 10.0085 0.586672 10.8219 1.19537 11.4206C1.80408 12.0193 2.62826 12.3542 3.48664 12.3519H6.76043V21.6215C6.76836 22.5185 7.13359 23.3762 7.77676 24.0086C8.41994 24.6411 9.28918 24.9971 10.196 24.9996V12.3514ZM13.7303 9.15466C11.4576 9.11492 11.7186 12.3514 11.7186 12.3514V24.9996C12.6255 24.9971 13.4949 24.641 14.1381 24.0085C14.7813 23.376 15.1464 22.5181 15.1542 21.621V12.3514H18.4313C19.2896 12.3536 20.1135 12.0185 20.7221 11.4198C21.3307 10.8211 21.674 10.0078 21.6765 9.15874V9.15466H13.735H13.7303Z" fill="url(#paint0_linear_690_43449)" />
												<defs>
													<linearGradient id="paint0_linear_690_43449" x1="4.1615" y1="6.5018e-07" x2="23.1706" y2="3.17554" gradientUnits="userSpaceOnUse">
														<stop stop-color="#59DF74" />
														<stop offset="1" stop-color="#15C0B6" />
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
						<path fill-rule="evenodd" clip-rule="evenodd" d="M128.264 1.301C109.034 0.163069 71.7534 -0.347839 52.2231 0.255962C33.6635 0.836539 11.822 2.78728 2.41498 2.78728C-0.0580828 2.78728 -0.219896 2.8105 0.149908 3.18207C0.704615 3.73943 5.23474 3.85554 13.2318 3.50719C19.4261 3.25174 19.5647 3.25175 20.5355 3.71621C21.5062 4.18067 21.668 4.18067 27.4924 3.94844C38.8639 3.48398 46.7916 2.97307 50.0274 2.99629C52.9627 3.01951 53.4481 3.43753 47.9703 3.69298C35.2583 4.32001 35.1196 4.34323 35.9517 5.15604C36.3215 5.52761 36.8069 5.57405 41.1059 5.50438C45.8209 5.43471 45.6591 5.3186 46.2138 5.85273C46.5836 6.20108 47.0689 6.38686 47.5774 6.41008C51.4835 6.45653 62.4852 6.71199 62.4852 6.71199C59.4805 6.80488 55.8056 7.10678 55.6207 7.29256C54.7886 8.12859 55.8749 8.19826 69.6964 8.40727C85.2513 8.61628 97.0388 9.40586 98.518 9.96322C98.8878 10.1026 99.0958 9.82388 98.8416 9.49876C97.9633 8.4305 83.2404 8.08215 77.1618 7.75703C75.9137 7.68736 75.1279 7.26934 78.4561 7.15322C86.3607 6.89777 83.5178 6.08496 82.6626 6.01529C81.507 5.9224 78.849 5.94562 72.285 5.8295C69.1185 5.78306 70.3666 5.38827 72.4237 5.36504C91.4224 5.10959 94.1728 5.27215 94.1728 5.15604C94.1728 4.38967 93.5025 4.29679 85.1126 4.18067C77.6934 4.06455 79.3806 3.60009 84.1187 3.57687C91.0988 3.55365 104.481 3.78587 104.666 3.50719C105.036 2.88017 104.065 2.48538 101.823 2.32282C98.31 2.06737 112.455 2.34604 122.694 2.71761C141.808 3.4143 144.998 4.20389 144.998 3.4143C145.044 2.32282 144.512 2.25315 128.264 1.301Z" fill="url(#paint0_linear_918_29947)" />
						<defs>
							<linearGradient id="paint0_linear_918_29947" x1="26.4195" y1="2.60077e-07" x2="41.1814" y2="41.5415" gradientUnits="userSpaceOnUse">
								<stop stop-color="#59DF74" />
								<stop offset="1" stop-color="#15C0B6" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<Container>
					<Row>
						<Col xxl="12" lg="12" md="12" sm="12" xs="12">
							<div className="ultimate_plan_column_1">
								{HomepageData.map((	homepage) =>
								<div className="item">
									<div className="item_content_image">
										<div className="item_content">
											<p>Diet, Naturopathy Coach</p>
											<h4>{homepage.contentP}</h4>
										</div>	
										<div className="item_image">
											<div className="white_background"></div>
											<Image className="img-fluid" src={homepage.Image} alt="fullBodyImage"/>
										</div>
									</div>	
									<h4 className="benefit">Benefits</h4>
									<ul>
										<li>
											<span>
												<svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
													<path d="M1 3.33333L2.76471 5L7 1" stroke="#15C06E" stroke-linecap="round" />
												</svg>
											</span>
											3 Stage Full Body Detox
										</li>
										<li>
											<span>
												<svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
													<path d="M1 3.33333L2.76471 5L7 1" stroke="#15C06E" stroke-linecap="round" />
												</svg>
											</span>
											Organ Cleansing & Fat Loss
										</li>
										<li>
											<span>
												<svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
													<path d="M1 3.33333L2.76471 5L7 1" stroke="#15C06E" stroke-linecap="round" />
												</svg>
											</span>
											Diet & Naturopathic Approach
										</li>
										<li>
											<span>
												<svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
													<path d="M1 3.33333L2.76471 5L7 1" stroke="#15C06E" stroke-linecap="round" />
												</svg>
											</span>
											Continuous Supervision
										</li>
									</ul>
									<div className="starting_amount">
										<p>Starting From:</p>
										<h4>₹2999/-</h4>
									</div>
								</div>
								)}
							</div>
						</Col> 
					</Row>
				</Container>
			</section>
		</>
	)
}

export default Homepage;