import React from 'react';

function Profile(props) {
    return (
        <div className='content'>
            main content
            <div>
                <img className='content__img' src="https://www.fgdc.gov/img/slider/slider-bg-network.jpg/image"/>
            </div>

            <div>
                ava
            </div>

            <div>
                all Posts
                <div>
                    new Post
                </div>
                <div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                    <div>
                        Post 3
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Profile;