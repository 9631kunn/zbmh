import React from 'react';
import styled from 'styled-components';

const mediaS = (props) => props.theme.media.s;
const mediaM = (props) => props.theme.media.m;
const mainColor = (props) => props.theme.color.main;
const mainOp = (props) => props.theme.color.mainOp;
const serif = (props) => props.theme.font.serif;

const Wrap = styled.div`
  font-family: ${serif};
  margin: 40px 0;
  padding-block-end: 40px;
  @media (min-width: ${mediaS}) {
    padding-block-end: 50px;
  }
  @media (min-width: ${mediaM}) {
    padding-block-end: 60px;
  }
  h2 {
    border-block-end: 3px solid ${mainColor};
    margin-block-end: 20px;
  }
  table {
    border-collapse: collapse;
    margin: 0 auto 40px;
    width: 98%;
    th,
    td {
      border: 1px solid #808080;
      padding: 10px;
    }
    th {
      background: ${mainOp};
      text-align: center;
      vertical-align: middle;
      width: 25%;
    }
    td {
      text-align: left;
      width: 75%;
    }
  }
`;

const Table = () => (
  <Wrap>
    <h2>募集要項</h2>
    <table>
      <tbody>
        <tr>
          <th>募集職種</th>
          <td>営業（正社員で働きたい）</td>
        </tr>
        <tr>
          <th>応募資格</th>
          <td>年齢・学歴・経験不問</td>
        </tr>
        <tr>
          <th>業務内容</th>
          <td>NHK受信料の契約・収納業務</td>
        </tr>
        <tr>
          <th>勤務地</th>
          <td>東京23区およびその周辺地域</td>
        </tr>
        <tr>
          <th>勤務時間</th>
          <td>【1】10:00～19:00　【2】11:00～20:00　【3】12:00～21:00　※休憩60分</td>
        </tr>
        <tr>
          <th>休日・休暇</th>
          <td>年間休日100日（GW・夏季・年末年始休暇、有給休暇）、平均月8日（当社カレンダーによる）</td>
        </tr>
        <tr>
          <th>給与</th>
          <td>
            260,000円＋インセンティブ（上限無し）※経験・能力を考慮、経験者優遇（業界経験者は特に優遇します！給与別途相談します。）　※試用期間3ヶ月～６ヶ月：230,000円＋インセンティブ（上限無し）
          </td>
        </tr>
        <tr>
          <th>特記事項</th>
          <td>
            賞与（年2回）、交通費支給（2万円まで）、家族手当、退職時慰労金、寮完備（入社時応相談）
            <br />
            各種親睦会・健康増進補助、社員旅行、各種社会保険加入など
          </td>
        </tr>
        <tr>
          <th>応募方法</th>
          <td>
            まずはお電話かお問い合わせフォームでご連絡ください。面接日時を調整させていただきます。なお面接の際は、履歴書（写真貼付）をご持参ください。ご不明な点などございましたらお気軽にお問い合わせください。
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <tbody>
        <tr>
          <th>募集職種</th>
          <td>営業サポート（日数、時間で働きたい）</td>
        </tr>
        <tr>
          <th>応募資格</th>
          <td>学歴・経験不問</td>
        </tr>
        <tr>
          <th>業務内容</th>
          <td>NHK受信料の契約・収納業務</td>
        </tr>
        <tr>
          <th>勤務地</th>
          <td>東京23区およびその周辺地域</td>
        </tr>
        <tr>
          <th>勤務時間</th>
          <td>週2日～・4H／日～（ご相談可能）</td>
        </tr>
        <tr>
          <th>給与</th>
          <td>完全歩合</td>
        </tr>
        <tr>
          <th>特記事項</th>
          <td>交通費支給（実費）</td>
        </tr>
        <tr>
          <th>応募方法</th>
          <td>
            まずはお電話かお問い合わせフォームでご連絡ください。面接日時を調整させていただきます。なお面接の際は、履歴書（写真貼付）をご持参ください。ご不明な点などございましたらお気軽にお問い合わせください。
          </td>
        </tr>
      </tbody>
    </table>
  </Wrap>
);

export default Table;
