import React from "react";
import "./HomePage.css";

export const HomePage = () => {
    return (
        <div>

            <section id="hero" className="d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          style={{ width: "185px" }}
                          alt="logo"
                        />
                            <h1>Project Maestro</h1>
                            <h2>Project Maestro is a platform where
                                students enroll to learn and obtain
                                mentorship and volunteers enroll
                                themselves to help / mentor those
                                students.
                            </h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a href="/login" className="btn-get-started scrollto">Login</a>
                                <a href="/signuphome" className="btn-get-started scrollto mx-3">Sign-Up</a>
                                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                            </div>
                        </div>



                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src="/img/hero-img.png" className="img-fluid animated" alt="" />
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
                            <h2>Features</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row">
                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                    <h4><a href="/">Search-Filter</a></h4>
                                    <p>Mentees can add filters/tags on their own needs
                                        and search for mentors accordingly. This has been
                                        provided to give mentees a say in the process,
                                        allowing them to select a particular mentor.
                                    </p>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-file"></i></div>
                                    <h4><a href="/">Session</a></h4>
                                    <p>Mentors can create sessions which can be accessed
                                        by the mentees. They can cover important topics in
                                        the group session. one the mentee enrolls in any
                                        session, it s displayed in their profile and they are
                                        also provided with joining link.</p>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-tachometer"></i></div>
                                    <h4><a href="/">Communication tools</a></h4>
                                    <p>A chat feature on the website, where mentors and
                                        mentees can communicate. They can also share media
                                        files like pdf, pictures. There is feature of one-one chat as
                                        well as group chats and only the mentor has the access
                                        to delete or remove participants.</p>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-layer"></i></div>
                                    <h4><a href="/">Discussion forum</a></h4>
                                    <p>A public conversation(chat room) that is accessible to all
                                        mentees in the discussion room. Mentees can enter this room
                                        with their name or anonymously. This will provide them to be
                                        able to openly discuss and communicate their concerns with
                                        everyone.</p>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-4" data-aos="zoom-in" data-aos-delay="400">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-layer"></i></div>
                                    <h4><a href="/">Reviews</a></h4>
                                    <p>Mentees can review the mentors with
                                        whom they have enrolled. This will also
                                        assist all new commers in learning more
                                        about the mentors, as well as motivate
                                        mentors to improve their performance in
                                        order to receive better reviews.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-4" data-aos="zoom-in" data-aos-delay="400">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-layer"></i></div>
                                    <h4><a href="/">Notes</a></h4>
                                    <p>Mentees can write any important notes and
                                        store them.
                                        This will help them for capturing a quick
                                        thought or save something important for
                                        later.
                                        Mentees can also view and edit notes they
                                        created in the platform.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-4" data-aos="zoom-in" data-aos-delay="400">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-layer"></i></div>
                                    <h4><a href="/">Online books</a></h4>
                                    <p>Search the world'
                                        s most comprehensive
                                        index of full-text books.
                                        There are times when the user is unable
                                        to obtain the resources they require for
                                        reading, so we have designed an inbuilt
                                        function that allows them to browse any
                                        books of their choice using the Google
                                        Books API.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-4" data-aos="zoom-in" data-aos-delay="400">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-layer"></i></div>
                                    <h4><a href="/">One to one booking</a></h4>
                                    <p>If a mentee wants to request one-on-one mentoring from a mentor, they
                                        can go to the mentor's profile and verify the mentor's availability, after
                                        which they can send the mentor a request for a one-on-one session.</p>
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
                            <p>Team Nutella, a group of 3 tech enthusiast from NIT Rourkela</p>
                        </div>

                        <div className="row">

                            <div className="col-lg-4">
                                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="pic"><img src="/img/team/team-1.jpeg" className="img-fluid" alt="" /></div>
                                    <div className="member-info">
                                        <h4>Parwin Akhtari </h4>
                                        
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
                            

                            <div className="col-lg-4 mt-4 mt-lg-0">
                                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="pic"><img src="/img/team/team-2.PNG" className="img-fluid" alt="" /></div>
                                    <div className="member-info">
                                        <h4>Siddharth Sharma</h4>
                                        
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

                            <div className="col-lg-4">
                                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="pic"><img src="/img/team/team-3.jpeg" className="img-fluid" alt="" /></div>
                                    <div className="member-info">
                                        <h4>Alpana Nanda</h4>
                                    
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
                        </div>

                    </div>
                </section>

            </main>
        </div>
    );
};
