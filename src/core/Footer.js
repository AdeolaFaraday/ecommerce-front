import React from "react";
import { Link, withRouter } from "react-router-dom";




const Footer = () => (
    <footer className="footer">
			<div className="footer_content">
				<div className="container">
					<div className="row">

						<div className="col-lg-4 footer_col">
							<div className="footer_about">
								<div className="footer_logo">
									<Link to="/">
										<div className="d-flex flex-row align-items-center justify-content-start">
											<div>MyBabesNG</div>
										</div>
									</Link>
								</div>
								<div className="footer_about_text">
									<p>MyBabesNG is an online store where you can get endearing items like teady bears, flowers, toys and other funky items peculiar to babies, children, girlfriends and mums.</p>
                  <p>Your number one store for everything cute</p>
								</div>
							</div>
						</div>


						<div className="col-lg-4 footer_col">
							<div className="footer_menu">
								<div className="footer_title">Terms</div>
								<ul className="footer_list">
									<li>
										<Link to="/"><div>Discount</div></Link>
									</li>
									<li>
										<Link to="/"><div>Referral Bonus</div></Link>
									</li>
                  <li>
										<Link to="/"><div>Added Package</div></Link>
									</li>
								</ul>
							</div>
						</div>


						<div className="col-lg-4 footer_col">
							<div className="footer_contact">
									<div className="footer_title">Quick Links</div>
									<ul className="footer_social_list d-flex flex-row align-items-start justify-content-start">
										<li><a href="http://facebook.com/mybabesng"><i className="fab fa-3x fa-facebook-f" aria-hidden="true"></i></a></li>
										<li><a href="http://wa.me/+2349058328175"><i className="fab fa-3x fa-whatsapp" aria-hidden="true"></i></a></li>
										<li><a href="http://instagram.com/mybabesng"><i className="fab fa-3x fa-instagram" aria-hidden="true"></i></a></li>
									</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer_bar">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="footer_bar_content d-flex flex-md-row flex-column align-items-center justify-content-start">
								<div className="copyright order-md-1 order-2">
                      MyBabesNG &copy; {new Date().getFullYear()}
                </div>
                <div class="ml-md-auto order-md-2 order-1">
									<div class="d-flex flex-row align-items-center justify-content-start">
                  Developed by faradayTech
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
  )

export default withRouter(Footer);
