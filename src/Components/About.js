import { Box, Container, Divider, Paper, Typography } from '@mui/material'
import React from 'react'

export default function About() {
    return (
        <Container>
            <Box p={5}>
                <Paper>
                    <Box p={5}>
                        <Typography variant='h4'>Giới thiệu về Tiki</Typography>
                        <Typography variant='h6'>
                            Tiki là một hệ sinh thái thương mại tất cả trong một, gồm các công ty thành viên như:

                            - Công ty TNHH TI KI ("TiKi") là đơn vị thiết lập, tổ chức sàn thương mại điện tử www.tiki.vn để các Nhà bán hàng thể tiến hành một phần hoặc toàn bộ quy trình mua bán hàng hóa, dịch vụ trên sàn thương mại điện tử.
                            - Công ty TNHH TikiNOW Smart Logistics ("TNSL") là đơn vị cung cấp các dịch vụ logistics đầu-cuối, dịch vụ vận chuyển, dịch vụ bưu chính cho Sàn thương mại điện tử www.tiki.vn
                            - Công ty TNHH MTV Thương mại Ti Ki ("Tiki Trading") là đơn vị bán hàng hóa, dịch vụ trên sàn thương mại điện tử
                            - Đơn vị bán lẻ Tiki Trading và Sàn Giao dịch cung cấp 10 triệu sản phẩm từ 26 ngành hàng phục vụ hàng triệu khách hàng trên toàn quốc.

                            Với phương châm hoạt động “Tất cả vì Khách Hàng”, Tiki luôn không ngừng nỗ lực nâng cao chất lượng dịch vụ và sản phẩm, từ đó mang đến trải nghiệm mua sắm trọn vẹn cho Khách Hàng Việt Nam với dịch vụ giao hàng nhanh trong 2 tiếng và ngày hôm sau TikiNOW lần đầu tiên tại Đông Nam Á, cùng cam kết cung cấp hàng chính hãng với chính sách hoàn tiền 111% nếu phát hiện hàng giả, hàng nhái.

                            Thành lập từ tháng 3/2010, Tiki.vn hiện đang là trang thương mại điện tử lọt top 2 tại Việt Nam và top 6 tại khu vực Đông Nam Á.

                            Tiki lọt Top 1 nơi làm việc tốt nhất Việt Nam trong ngành Internet/E-commerce 2018 (Anphabe bình chọn), Top 50 nơi làm việc tốt nhất châu Á 2019 (HR Asia bình chọn).
                        </Typography>

                        <Divider sx={{ marginBottom: 5 }} />

                        <Typography variant='h4'>Thông tin về công ty</Typography>
                        <Typography variant='h6'>
                            - Công ty TNHH TI KI
                            - Địa chỉ đăng ký kinh doanh: Tòa Nhà Viettel, Số 285, Đường Cách Mạng Tháng 8 - Phường 12 - Quận 10 - TP Hồ Chí Minh - Việt Nam.

                            - Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 06/01/2010

                            Quý khách có nhu cầu liên lạc, trao đổi hoặc đóng góp ý kiến, vui lòng tham khảo các thông tin sau:

                            - Liên lạc qua điện thoại: 1900 6035
                            - Liên lạc qua email: Truy cập hotro.tiki.vn
                            - Fanpage của Tiki: http://facebook.com/tiki.vn
                            - Đối tác có nhu cầu hợp tác quảng cáo hoặc kinh doanh: marketing@tiki.vn

                            - Văn phòng chính: Tòa nhà Viettel, 285 Cách Mạng Tháng 8, Phường 12, Quận 10, Thành phố Hồ Chí Minh.
                            - Văn phòng: 52 Út Tịch, Phường 4, Quận Tân Bình, Thành Phố Hồ Chí Minh.
                        </Typography>
                        <Divider sx={{ marginBottom: 5 }} />
                        <iframe
                            width="100%"
                            height="550"
                            src={`https://www.youtube.com/embed/04KVix0i-no`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />

                    </Box>
                </Paper>
            </Box >
        </Container >
    )
}
