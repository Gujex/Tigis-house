import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
const Slider = () => {
    return (
        <div >
            <Carousel>
                <Carousel.Item interval={1000} >
                    <img
                        width={1000}
                        height={600}
                        className="d-block w-100"
                        src="https://cdn.1tv.ge/app/uploads/2020/11/1604601660-%E1%83%97%E1%83%98%E1%83%92%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%AE%E1%83%9A%E1%83%98.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        width={500}
                        height={600}
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrKP9tewBnS4Z4bu0X5KAYkfQGf7QXH7vog&usqp=CAU"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={500}
                        height={600}
                        className="d-block w-100"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAxlBMVEUBW7v+1QH///8AU6/w0g4AXrcDWb3+0wD+0QAAWboAULgATbcAUrgAVbkAVrkAS7b//vj/+N7/9M3/++zy9vsAQLP+6JP+6p///PL/+eTO2u7Az+kASLX/7az+4GX+5YL+3En/9tj+3lb+2jf/8b3p7/imu+CSrdqww+R1mNHU3/D+43j/88f+2Cv+32D/8sJ6m9NTgckAO7JLfcdjjM2ett45csPR3O8oasD+5of+6ZiJpdZtk8/g6PVhiswrbMEANbFHeMiYKEzTAAAI/UlEQVR4nO2ZaVviSBCAk97FJjdHuOSQU5RLGAZE8Vj//5/aqupOxJ1d6X0e0IGn3g+Yo5OhX6qqKxnLYhiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYZjfhMANv/srfAmO8/lp//PziD+vL85WVhgFlrbkBMFnMpzNMLNPlpMRQhgoPUnCn/FTYDkhyHKcWHwiw3Fj8eztu90TuFqfqatoIITrRCP4cG+EuPb/bZCDYRfMQYO1R0OwhUFnmoTOBcztxV8IsfVd2Lx0MYCiyN1xEkSZZRBaqFK7csJA6wh8NBnq0Y7lD2HQ8kxdbWBuq9KlEKMGCBMjz/LfLuPBTSadr7t4xlhxS3Uh4h9Q3RzXepovPBzgbldu4C4XIe4EnuN51zD27Txz0HmFudUj+BDeCuPK87HiABs9YX9Ou6vbegyu4ue579fxQLzwodgJMX8RKu2CRQwHMfhez9QVxtUl6VnWSdtaqQJr7wOEuB+IhCjZXIaYlrHacfVAjMG9q+VpQmv8MwXKdpCko7jBAxEN8DHaxG0pVTW8TbZGnneZHn6J6un2njbtVHFCdEWxgdkj5hYG14/X1JWLCq6jcL3CjfufQQQ5WbdKWJc2ytUlXj5spKrOtb9y3HSGmD1ijWv+ev2c5qCPUuoNy4nwzNCDpW6x9nwPnW4b6Or5LxyyWuKBNeWn+82TOhZeLHYpYXTFqhrReQelQGApaVvs8UMXHmRwTB2XRvEUYZ+wwiWgFGTOOK6spFKrP4MfSQUaJsGh1sW6R+3VEwh0GsOkYJGrjYslbQgH48iK7mH70yelE8Yb0bTvqVrpSAFnLyUv0CMiOrXx6jrYVJHCjB3Q6FcPB9yiwIY6ua+5P1VcJWerVrdthJl2vS41rgdzLUtl4YLWOXjSo4Vx8PoX5uoPOkaxtMQbZMISqj/TnkE9lAgRkhCxDrB5HzzNY2rhLSz+KuXUI85bqJLWKv3Eg8pVA2tXQA8Aqk3dnKmrcKHKkYdJBQWnkTadW3yMdoLrWNcrjLibklvCAQO1IpCrDHYLz1703q2eqyvVNKwdeotw41rhUk/4nvornaJx6NAbBGSVOompy/I8iqgg7VHPNgcpt+oevZ2iBzmXskvceDRhVxVyKFrU4SNLasSeR/i4/RP7sCgmPRENfRqIeN9LrpPFCUaX+AYGAmpFfUKQWdWvN3q+zqY+qj810FugJI5cb3hZvy1BK/EUeDejjAOxN6RXOTeD0YuXuV5+SVhdfAtRRH/8yFX7gee5QXIy8BqRrzZ992U7f2tcXLiR51+4r28w3otgZPDq0QAaGnj+V3xpK/Obg6/lv/s7aKw/GFOsPxlTLPubkUaHfgu+3JWUpELO9G5//MuQcg9PJMra+9TJr3L75a4KoilRkajRFB+E+OdUc0LQABxny6J4+PyGrWqud5yv+k++2tVYiD44mELX1IZdWROi9WGAbMKpB2nDJ0YcuMx/Gjd4hzN1ZZfHOPUrUNHFXfhb/nBeQlhhSMFnEfJwIn4NvI+0K7+qkkfJy2O7kjufRJYyqwIK8GhLidmhh436o5QdijxIQe1q9qEwSTntJffGO8pxm/4VPaJSmFwd3tZxXV1RVZLjCe60afIdMZXTch4U3N21ZJlc7YbBGF21lM2KpCiDO3QhI+VjH7dmWPbLVThOd7VnmNSQqnYLvBbwCOkWtYPP5qiuMCrK9N0nML8qxgtMqllO3w70sDhV7Ga+0E4uQUdgBxQI0ZGS9iSGXwvytmmjo8dsR12ewwuqOADcF+gQFkN98/6hI+u4rnI0X5xFW+Lky1nY7lQTVXkqR32h9dAld0JnHf0lV9k2esFL8zUam8oGHRhE42x6S4ErKPwbIC93cq5EllLiLosh1MJJVXt3aK9a6aqqpKjo6oOnKHEp+1Rc4ccsm0/HguH8rFcgw2P6CXKUdYJqHHwUstO9a8L/57iu8Oe2mzQ/kjDFuecklh+wp5JUU9Cu8pR7+tpekk9YukhFvlXJVyQsplLib9CSj5SUORKE13bHFMUTdZeDcvR6JVSlFa0aZQW5omBoJkJEIS/SLoqMoDd1bVp7sjbFILYRuBBI2a50SCGtAZSDPcrfGf40FK6tPd/uf3NcVyjhUc22WSUHyhUWnMck0a6ycsdVQW+ruJpqVyCWXF3pG89qOhuzFYqrIoUrVr/u5L2WHZjjuqK6hFOFiAAtZXJVldQq4KNL0hIU3101aYStK1U7ycGpulnvfRDRIVdl7Qp/mqlaD+HYibnSc+q31N+eveMKU4SESIq/5EmmpQdiSctl8bPazmFIqoJHY/DyXCuLOUmuHrQrNE//JjyQZ8eT7oGnc+xeVAcF/YFwkarm4GTxae9fXNGE87ZdpLrVpQhpUjWaJK6olNm01FXJ1VVWtfckD2UXbFwlD13cj+uqp4uN6g2w6FDHhW02lGtJkZBTrgqJq0eRcqVckYRmtp+6Qp0TyrVcFn+OGbqq0sLYV9FFVE7KFRVo7AnHKrzICiijRKvVihg9NVW201Isa8lcc7rTVM08RZAa0U9tFilL6QZ52VbROk7OnVTPoIKE3r0UlQ2sJlhG9HQe+ira+h+CIGm6uipJp8r5tPU+faWyplfWvMTbNqXuP9VjkugcfDZHfs8gC9Uuza+XK6ojnTLu62I/bau0mn14ByUrVLPwhSgUdKo60xysCMWkZbDtSRE60kfqIcadKZ6vUW7SANmd5AutU3vPsPMeJdlI9svNJr64Ugub7LY/XpS+cbF3XzH35PsIuJ8c04sXmd6+nQg6zfdX/82XvSY/GN/+/zgnBLsyh12Zw67MYVfmsCtz2JU57MocdmUOuzKHXZnDrsxhV+awK3PYlTnsyhx2ZQ67ModdmcOuzGFX5rArc9iVOezKHHZlDrsyh12Zw67MYVfmsCtz2JU57MocdmUOuzKHXZnDrsxhV+awK3PYlTnsyhx2ZQ67ModdmcOuzGFX5rArc9iVOezKHHZlDrsyh12Zw67MYVfmsCtz2JU57MocdmUOuzKHXZnDrsxhV+b8Df5yDXpOw2YZAAAAAElFTkSuQmCC"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;