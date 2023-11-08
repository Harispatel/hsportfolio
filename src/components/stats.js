import React, { useState } from 'react'
import { COLORS } from './common/Colors'
import { Avatar, Card, Carousel, Col, Image, Row } from 'antd'
import Testimonials from './testimonials'
import Meta from 'antd/es/card/Meta'
import { styles } from '../styles/styles'
import { IMAGES } from '../assets/IMAGES'

function Stats({ props }) {
    const [loadingStats, setLoadingStats] = useState(true)
    setTimeout(() => {
        setLoadingStats(false)
    }, 1000)
    return (
        <div
            className="exprnc-container page-section"
            style={{
                backgroundColor: props.isDM ? COLORS.DARK : COLORS.WHITE,
            }}
        >
            <p
                className="page-title"
                style={{
                    color: props?.isDM ? COLORS.WHITE : COLORS.DARK,
                }}
            >
                Statistics & Details
            </p>
            <Row>
                <Col xs={20} sm={14} xl={6} lg={6} style={styles.mb_50}>
                    {loadingStats ? (
                        <Card style={{ width: 300 }} loading={loadingStats}>
                            <Meta
                                avatar={
                                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                }
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>
                    ) : (
                        <a
                            href="https://app.daily.dev/harispatel62"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                aria-readonly
                                alt="Haris's Dev Card"
                                width={200}
                                src="https://api.daily.dev/devcards/c575f0a2f4ba41998c6460fd55594fbf.png?r=wxa"
                            />
                        </a>
                    )}
                </Col>
                <Col xs={20} sm={20} xl={12} lg={12} className='tsm-container'>
                    <Testimonials props={props} />
                </Col>
                <Col xs={20} sm={20} xl={5} lg={5}>
                {loadingStats ? (
                        <Card style={{ width: 300 }} loading={loadingStats}>
                            <Meta
                                avatar={
                                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                }
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>
                    ) : (
                        <Card
                                hoverable
                                style={{
                                    backgroundColor: props.isDM
                                        ? COLORS.GREY
                                        : COLORS.TRANSPARENT,
                                }}
                                cover={
                                    <img
                                        alt="example"
                                        src={"https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4ac542062caa3bfdbba039a7b83cad14-663910081609262692629/JPEG_20201229_225451_505202606.jpg"}
                                    />
                                }
                            >
                                <Row>
                                    <span>Seller</span>
                                </Row>
                            </Card>
                    )}
                    {/* <!-- Put this code anywhere in the body of your page where you want the badge to show up. --> */}

                    <div
                        itemscope
                        itemtype="http://schema.org/Person"
                        class="fiverr-seller-widget"
                        style={{display:'inline-block'}}
                    >
                        <a
                            itemprop="url"
                            href="https://www.fiverr.com/harispatel62"
                            // rel={"nofollow"}
                            // target={"_blank"}
                            style={{display:'inline-block'}}
                        >
                            <div
                                class="fiverr-seller-content"
                                id="fiverr-seller-widget-content-d8ce7ec0-4451-4dc0-8b86-5474306fa8f0"
                                itemprop="contentURL"
                                style={{display:'block'}}
                            ></div>
                            <div
                                id="fiverr-widget-seller-data"
                                style={{display:'block'}}
                            >
                                <div itemprop="name">harispatel62</div>
                                <div
                                    itemscope
                                    itemtype="http://schema.org/Organization"
                                >
                                    <span itemprop="name">Fiverr</span>
                                </div>
                                <div itemprop="jobtitle">Seller</div>
                                <div itemprop="description">
                                    Working for 2+ years, I have gained the
                                    essential experience, expertise, and
                                    creative knowledge to create the most
                                    Inspiring videos. You can transform your
                                    Brand, Product & Service promotion by adding
                                    just a Perfect Video @ REASONABLE PRICE and
                                    get High ROI. I have created a multitude of
                                    videos like Explainer, 2D-Animation, White
                                    Board, Graphics Designing and many other. I
                                    am quick to process and deliver with 7-days
                                    a week availability. Inbox me to get your
                                    brand in some action leveraging my skills
                                </div>
                            </div>
                        </a>
                    </div>

                    <script
                        id="fiverr-seller-widget-script-d8ce7ec0-4451-4dc0-8b86-5474306fa8f0"
                        src="https://widgets.fiverr.com/api/v1/seller/harispatel62?widget_id=d8ce7ec0-4451-4dc0-8b86-5474306fa8f0"
                        data-config='{"category_name":"Graphics \u0026 Design"}'
                        async="true"
                        defer="true"
                    ></script>
                </Col>
            </Row>
        </div>
    )
}

export default Stats
