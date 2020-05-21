import React from "react";
import Menu from './Menu';
import Footer from './Footer';

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    background,
    children
}) => (
    <div>
        <Menu></Menu>
        <div class="hero-wrap hero-bread" style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9">
          	<p className="breadcrumbs"><span class="mr-2">{title}</span></p>
            <h1 className="mb-0 bread" >{description}</h1>
          </div>
        </div>
      </div>
    </div>

        {/* <div className="jumbotron">
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div> */}
        <div className={className}>{children}</div>
        <Footer />
    </div>
);

export default Layout;
