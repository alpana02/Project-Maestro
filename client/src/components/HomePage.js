import React from "react";
import "./HomePage.css";

export const HomePage = () => {
    return (
        <div>

            <section id="hero" className="d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h1>Better Solutions For Your Business</h1>
                            <h2>We are team of talented designers making websites with Bootstrap</h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a href="#about" className="btn-get-started scrollto">Get Started</a>
                                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src="/img/hero-img.png" className="img-fluid animated" alt=""/>
                        </div>
                    </div>
                </div>

            </section>

            <main id="main">

                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>About Us</h2>
                        </div>

                        <div className="row content">
                            <div className="col-lg-6">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                    <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0">
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <a href="/" className="btn-learn-more">Learn More</a>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="services" className="services section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Services</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row">
                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                    <h4><a href="/">Lorem Ipsum</a></h4>
                                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-file"></i></div>
                                    <h4><a href="/">Sed ut perspici</a></h4>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-tachometer"></i></div>
                                    <h4><a href="/">Magni Dolores</a></h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-layer"></i></div>
                                    <h4><a href="/">Nemo Enim</a></h4>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="cta" className="cta">
                    <div className="container" data-aos="zoom-in">

                        <div className="row">
                            <div className="col-lg-9 text-center text-lg-start">
                                <h3>Call To Action</h3>
                                <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="col-lg-3 cta-btn-container text-center">
                                <a className="cta-btn align-middle" href="/">Call To Action</a>
                            </div>
                        </div>

                    </div>
                </section>


                <section id="team" className="team section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Team</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row">

                            <div className="col-lg-6">
                                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="pic"><img src="/img/team/team-1.jpg" className="img-fluid" alt=""/></div>
                                    <div className="member-info">
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                        <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                        <div className="social">
                                            <a href="/"><i className="ri-twitter-fill"></i></a>
                                            <a href="/"><i className="ri-facebook-fill"></i></a>
                                            <a href="/"><i className="ri-instagram-fill"></i></a>
                                            <a href="/"> <i className="ri-linkedin-box-fill"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="pic"><img src="/img/team/team-2.jpg" className="img-fluid" alt=""/></div>
                                    <div className="member-info">
                                        <h4>Sarah Jhonson</h4>
                                        <span>Product Manager</span>
                                        <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                        <div className="social">
                                            <a href="/"><i className="ri-twitter-fill"></i></a>
                                            <a href="/"><i className="ri-facebook-fill"></i></a>
                                            <a href="/"><i className="ri-instagram-fill"></i></a>
                                            <a href="/"> <i className="ri-linkedin-box-fill"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
                                    <div className="pic"><img src="/img/team/team-3.jpg" className="img-fluid" alt=""/></div>
                                    <div className="member-info">
                                        <h4>William Anderson</h4>
                                        <span>CTO</span>
                                        <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                        <div className="social">
                                            <a href="/"><i className="ri-twitter-fill"></i></a>
                                            <a href="/"><i className="ri-facebook-fill"></i></a>
                                            <a href="/"><i className="ri-instagram-fill"></i></a>
                                            <a href="/"> <i className="ri-linkedin-box-fill"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
                                    <div className="pic"><img src="/img/team/team-4.jpg" className="img-fluid" alt=""/></div>
                                    <div className="member-info">
                                        <h4>Amanda Jepson</h4>
                                        <span>Accountant</span>
                                        <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                        <div className="social">
                                            <a href="/"><i className="ri-twitter-fill"></i></a>
                                            <a href="/"><i className="ri-facebook-fill"></i></a>
                                            <a href="/"><i className="ri-instagram-fill"></i></a>
                                            <a href="/"> <i className="ri-linkedin-box-fill"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </main>
        </div>
    );
};
