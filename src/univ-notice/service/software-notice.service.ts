import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class SoftwareNoticeService {
  async getSoftwareNotices(): Promise<any[]> {
    try {
      const response = await axios.get(
        'https://home.sch.ac.kr/sw/07/010000.jsp',
      );
      const html = response.data;

      const $ = cheerio.load(html);
      const notices = [];

      $('#sub_board > div > div.board_list > table > tbody > tr').each(
        (index, element) => {
          if (index < 20) {
            const $titleLink = $(element).find('td.subject > a');
            const title = $titleLink.text().trim();
            const link =
              'https://home.sch.ac.kr/sw/07/010000.jsp' +
              $titleLink.attr('href');

            // 크롤링 추가: 글 번호, 작성자, 작성일 정보 가져오기
            const $tds = $(element).find('td');
            const number = $($tds[0]).text().trim(); // 게시물 번호
            const author = $($tds[2]).find('span').remove().end().text().trim(); // 작성자

            const date = $($tds[3]).find('span').remove().end().text().trim(); // 날짜 텍스트 추출
            //const dateParts = dateText.split(": ")[1]; // "날짜: " 부분 제거

            notices.push({ number, title, author, date, link });
          }
        },
      );

      return notices;
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred');
    }
  }
}
