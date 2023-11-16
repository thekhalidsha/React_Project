import React from 'react'
import BannerLogo from './../../assets/banner.svg'

export const Home = () => {
  return (
    <div class="container-fluid hero-header bg-light py-5 mb-5">
        <div class="container py-5">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-4 mb-3 animated slideInDown">KodeJex</h1>
                    <p class="animated slideInDown">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, facere temporibus ad, aliquam recusandae atque provident rem vitae minima obcaecati nobis qui quam? Culpa eaque sit nesciunt ab minus magnam.</p>
                    <a href="" class="btn btn-primary py-3 px-4 animated slideInDown">Explore More</a>
                </div>
                <div class="col-lg-6 fadeIn">
                    <img class="img-fluid" src={BannerLogo} alt="banner_img" />
                </div>
            </div>
        </div>
    </div>
  )
}
