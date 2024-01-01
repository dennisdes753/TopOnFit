import React from 'react';
import {Image} from 'react-bootstrap';
import { HomepageData, DetoxificationData, WeightManagementData } from './homepageData';

export function OurUltimateData() {
  return (
    <>
        <div className="outUltimateItems">
            {HomepageData.map((homepage, i) =>
                <div key={i} className="item">
                    <div className="item_content_image">
                        <div className="item_content">
                            <p>{homepage.contentP}</p>
                            <h4>{homepage.contenth4}</h4>
                        </div>
                        <div className="item_image">
                            <Image className="img-fluid" src={homepage.Image} alt="fullBodyImage" />
                        </div>
                    </div>
                    <h4 className="benefit">Benefits</h4>
                    <ul>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                    <path d="M1 3.33333L2.76471 5L7 1" stroke="#15C06E" strokeLinecap="round" />
                                </svg>
                            </span>
                            {homepage.benefit1}
                        </li>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                    <path d="M1 3.33333L2.76471 5L7 1" stroke="#15C06E" strokeLinecap="round" />
                                </svg>
                            </span>
                            {homepage.benefit2}
                        </li>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                    <path d="M1 3.33333L2.76471 5L7 1" stroke="#15C06E" strokeLinecap="round" />
                                </svg>
                            </span>
                            {homepage.benefit3}
                        </li>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                    <path d="M1 3.33333L2.76471 5L7 1" stroke="#15C06E" strokeLinecap="round" />
                                </svg>
                            </span>
                            {homepage.benefit4}
                        </li>
                    </ul>
                    <div className="starting_amount">
                        <p>Starting From:</p>
                        <h4>{homepage.startingRate}</h4>
                    </div>
                </div>
            )}
        </div>    
    </>
  )
}

export function Detoxification() {
    return (
        <>
            <div className="outUltimateItems">
                {DetoxificationData.map((homepage, i) =>
                    <div key={i} className="item">
                        <div className="item_content_image">
                            <div className="item_content">
                                <p>{homepage.contentP}</p>
                                <h4>{homepage.contenth4}</h4>
                            </div>
                            <div className="item_image">
                                <Image className="img-fluid" src={homepage.Image} alt="fullBodyImage" />
                            </div>
                        </div>
                        <h4 className="benefit">Benefits</h4>
                        <ul>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                        <path d="M1 3.33333L2.76471 5L7 1" stroke="#15C06E" strokeLinecap="round" />
                                    </svg>
                                </span>
                                {homepage.benefit1}
                            </li>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                        <path d="M1 3.33333L2.76471 5L7 1" stroke="#15C06E" strokeLinecap="round" />
                                    </svg>
                                </span>
                                {homepage.benefit2}
                            </li>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                        <path d="M1 3.33333L2.76471 5L7 1" stroke="#15C06E" strokeLinecap="round" />
                                    </svg>
                                </span>
                                {homepage.benefit3}
                            </li>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                        <path d="M1 3.33333L2.76471 5L7 1" stroke="#15C06E" strokeLinecap="round" />
                                    </svg>
                                </span>
                                {homepage.benefit4}
                            </li>
                        </ul>
                        <div className="starting_amount">
                            <p>Starting From:</p>
                            <h4>{homepage.startingRate}</h4>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export function WeightManagement() {
    return (
        <>
            <div className="outUltimateItems">
                {WeightManagementData.map((homepage, i) =>
                    <div key={i} className="item">
                        <div className="item_content_image">
                            <div className="item_content">
                                <p>{homepage.contentP}</p>
                                <h4>{homepage.contenth4}</h4>
                            </div>
                            <div className="item_image">
                                <Image className="img-fluid" src={homepage.Image} alt="fullBodyImage" />
                            </div>
                        </div>
                        <h4 className="benefit">Benefits</h4>
                        <ul>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                        <path d="M1 3.33333L2.76471 5L7 1" stroke="#15C06E" strokeLinecap="round" />
                                    </svg>
                                </span>
                                {homepage.benefit1}
                            </li>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                        <path d="M1 3.33333L2.76471 5L7 1" stroke="#15C06E" strokeLinecap="round" />
                                    </svg>
                                </span>
                                {homepage.benefit2}
                            </li>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                        <path d="M1 3.33333L2.76471 5L7 1" stroke="#15C06E" strokeLinecap="round" />
                                    </svg>
                                </span>
                                {homepage.benefit3}
                            </li>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                        <path d="M1 3.33333L2.76471 5L7 1" stroke="#15C06E" strokeLinecap="round" />
                                    </svg>
                                </span>
                                {homepage.benefit4}
                            </li>
                        </ul>
                        <div className="starting_amount">
                            <p>Starting From:</p>
                            <h4>{homepage.startingRate}</h4>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}