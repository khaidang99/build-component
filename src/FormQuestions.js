import React from "react";

import { useStoreContext, NUMBER_LAST_STEP } from "./store";

import AnswerForm from "./components/AnswerForm";
import AnswerRadio from "./components/AnswerRadio";
import AnswerMess from "./components/AnswerMess";

const TYPE_MESS = {
  MESS: "MESS",
  FORM: "FORM",
  ONLY_RADIO: "ONLY_RADIO",
};

const QUESTIONS = {
  1: {
    typeMess: TYPE_MESS.ONLY_RADIO,
    question: "Bạn muốn tư vấn về dịch vụ nào?",
    name: "Bạn muốn tư vấn về dịch vụ nào",
    fields: [
      {
        label: "Thiết kế Website",
        value: "Thiết kế Website",
        redirectToStep: 2,
      },
      {
        label: "Dịch vụ SEO cho Website đã có sẵn",
        value: "Dịch vụ SEO cho Website đã có sẵn",
        redirectToStep: 9,
      },
    ],
  },
  2: {
    typeMess: TYPE_MESS.ONLY_RADIO,
    question:
      "Bạn muốn thiết kế website mới, hay đang có sẵn website và cần chỉnh sửa?",
    name: "Bạn muốn thiết kế website mới, hay đang có sẵn website và cần chỉnh sửa",
    fields: [
      {
        label: "Thiết kế website mới",
        value: "Thiết kế website mới",
        redirectToStep: 10,
      },
      {
        label: "Có sẵn website và cần chỉnh sửa",
        value: "Có sẵn website và cần chỉnh sửa",
        redirectToStep: 11,
      },
    ],
  },
  3: {
    typeMess: TYPE_MESS.ONLY_RADIO,
    question:
      "Bạn muốn sử dụng mẫu website có sẵn trong kho themes hay thiết kế giao diện riêng?",
    name: "Bạn muốn sử dụng mẫu website có sẵn trong kho themes hay thiết kế giao diện riêng",
    fields: [
      {
        label: "Sử dụng mẫu website có sẵn trong kho themes",
        value: "Sử dụng mẫu website có sẵn trong kho themes",
        redirectToStep: 12,
      },
      {
        label: "Thiết kế giao diện riêng.",
        value: "Thiết kế giao diện riêng.",
        redirectToStep: 13,
      },
    ],
  },
  4: {
    typeMess: TYPE_MESS.ONLY_RADIO,
    question:
      "Bạn có muốn sử dụng dịch vụ thiết kế Logo của Gleads cho Website mới của mình không?",
    name: "Bạn có muốn sử dụng dịch vụ thiết kế Logo của Gleads cho Website mới của mình không",
    fields: [
      {
        label: "Có",
        value: "Có",
        redirectToStep: 14,
      },
      {
        label: "Không",
        value: "Không",
        redirectToStep: 5,
      },
    ],
  },
  5: {
    typeMess: TYPE_MESS.ONLY_RADIO,
    question:
      "Bạn có muốn sử dụng dịch vụ viết content của Gleads cho website mới này không? Hay bạn sẽ tự nhập content khi thực hiện Website này?",
    name: "Bạn có muốn sử dụng dịch vụ viết content của Gleads cho website mới này không? Hay bạn sẽ tự nhập content khi thực hiện Website này",
    fields: [
      {
        label:
          "Sử dụng dịch vụ viết content của Gleads cho website mới này không?",
        value:
          "Sử dụng dịch vụ viết content của Gleads cho website mới này không?",
        redirectToStep: 15,
      },
      {
        label: "Sẽ tự nhập content khi thực hiện Website này?",
        value: "Sẽ tự nhập content khi thực hiện Website này?",
        redirectToStep: 6,
      },
    ],
  },
  6: {
    typeMess: TYPE_MESS.ONLY_RADIO,
    question: "Bạn muốn sử dụng domain của Gleads cung cấp không?",
    name: "Bạn muốn sử dụng domain của Gleads cung cấp không",
    fields: [
      {
        label: "Có",
        value: "Có",
        redirectToStep: 16,
      },
      {
        label: "Không",
        value: "Không",
        redirectToStep: 7,
      },
    ],
  },
  7: {
    typeMess: TYPE_MESS.ONLY_RADIO,
    question: "Bạn có muốn sử dụng hosting của Gleads cung cấp không?",
    name: "Bạn có muốn sử dụng hosting của Gleads cung cấp không",
    fields: [
      {
        label: "Có",
        value: "Có",
        redirectToStep: 17,
      },
      {
        label: "Không",
        value: "Không",
        redirectToStep: 8,
      },
    ],
  },
  8: {
    typeMess: TYPE_MESS.ONLY_RADIO,
    question: "Bạn có muốn sử dụng dịch vụ SEO cho Website này luôn không?",
    name: "Bạn có muốn sử dụng dịch vụ SEO cho Website này luôn không",
    fields: [
      {
        label: "Có",
        value: "Có",
        redirectToStep: 9,
      },
      {
        label: "Không",
        value: "Không",
        redirectToStep: NUMBER_LAST_STEP,
      },
    ],
  },
  9: {
    typeMess: TYPE_MESS.FORM,
    fields: [
      {
        question: "Khách hàng có muốn sử dụng dịch vụ SEO nào của Gleads?",
        typeField: "radio",
        name: "Khách hàng có muốn sử dụng dịch vụ SEO nào của Gleads",
        options: [
          {
            label: "SEO tổng thể (traffic thuộc top đầu trong ngành)",
            value: "SEO tổng thể (traffic thuộc top đầu trong ngành)",
          },
          {
            label: "SEO từ khóa (chọn ngách trong ngành để triển khai SEO)",
            value: "SEO từ khóa (chọn ngách trong ngành để triển khai SEO)",
          },
          {
            label: "SEO Audit (đã triển khai SEO nhưng không đạt hiệu quả)",
            value: "SEO Audit (đã triển khai SEO nhưng không đạt hiệu quả)",
          },
        ],
        required: true,
      },
      {
        question: "Trang web khách hàng muốn SEO?",
        typeField: "text",
        required: true,
        name: "Trang web khách hàng muốn SEO?",
      },
      {
        question: "Khách hàng đã có bộ từ khóa SEO hay chưa?",
        typeField: "radio",
        required: true,
        name: "Khách hàng đã có bộ từ khóa SEO hay chưa?",
        options: [
          {
            label: "Có",
            value: "Có",
          },
          {
            label: "Chưa có",
            value: "Chưa có",
          },
        ],
      },
      {
        question: "Bạn muốn SEO về dịch vụ, và sản phẩm nào?",
        typeField: "text",
        required: true,
        name: "Bạn muốn SEO về dịch vụ, và sản phẩm nào?",
      },
      {
        question: "Bạn có giấy phép kinh doanh về dịch vụ, sản phẩm đó không?",
        typeField: "text",
        required: true,
        name: "Bạn có giấy phép kinh doanh về dịch vụ, sản phẩm đó không?",
      },
      {
        question: "Mục tiêu chạy quảng cáo của bạn là gì?",
        typeField: "text",
        required: true,
        name: "Mục tiêu chạy quảng cáo của bạn là gì?",
      },
      {
        question:
          "Trước đây bạn đã từng chạy quảng cáo hoặc sử dụng dịch vụ marketing nào chưa?",
        typeField: "text",
        required: true,
        name: "Trước đây bạn đã từng chạy quảng cáo hoặc sử dụng dịch vụ marketing nào chưa?",
      },
    ],
    redirectToStep: NUMBER_LAST_STEP,
  },
  10: {
    typeMess: TYPE_MESS.FORM,
    fields: [
      {
        question:
          "Bạn đã có sẵn domain chưa? Xin hãy điền tên domain mà bạn sử dụng cho website này.",
        typeField: "text",
        name: "Bạn đã có sẵn domain chưa Xin hãy điền tên domain mà bạn sử dụng cho website này",
        required: true,
      },
      {
        question:
          "Website của bạn làm về lĩnh vực nào? Có những nghiệp vụ gì đặc biệt?",
        typeField: "text",
        name: "Website của bạn làm về lĩnh vực nào? Có những nghiệp vụ gì đặc biệt?",
        required: true,
      },
      {
        question: "Bạn muốn làm loại Website nào?",
        typeField: "radio",
        required: true,
        name: "Bạn muốn làm loại Website nào",
        options: [
          {
            label: "Website Onepage",
            value: "Website Onepage",
          },
          {
            label: "Website để giới thiệu dịch vụ, dự án",
            value: "Website để giới thiệu dịch vụ, dự án",
          },
          {
            label: "Website tin tức",
            value: "Website tin tức",
          },
          {
            label: "Website thương mại điện tử",
            value: "Website thương mại điện tử",
          },
          {
            label: "Khác",
            value: "Khác",
          },
        ],
      },
      {
        question:
          "Bạn muốn có hệ thống bài viết, để đăng bài mỗi ngày cho website chứ?",
        typeField: "radio",
        required: true,
        name: "Bạn muốn có hệ thống bài viết để đăng bài mỗi ngày cho website chứ",
        options: [
          {
            label: "Có",
            value: "Có",
          },
          {
            label: "Không",
            value: "Không",
          },
        ],
      },
      {
        question:
          "Website bạn có muốn làm hệ thống bán hàng với hệ thống sản phẩm, giá, giỏ hàng, đơn hàng không?",
        typeField: "radio",
        required: true,
        name: "Website bạn có muốn làm hệ thống bán hàng với hệ thống sản phẩm giá giỏ hàng đơn hàng không",
        options: [
          {
            label: "Có",
            value: "Có",
          },
          {
            label: "Không",
            value: "Không",
          },
        ],
      },
      {
        question:
          "Nếu có hệ thống sản phẩm, bạn có muốn tích hợp hệ thống thanh toán online không?",
        typeField: "radio",
        required: true,
        name: "Nếu có hệ thống sản phẩm bạn có muốn tích hợp hệ thống thanh toán online không",
        options: [
          {
            label: "Có",
            value: "Có",
          },
          {
            label: "Không",
            value: "Không",
          },
        ],
      },
      {
        question:
          "Nếu tích hợp hệ thống thanh toán online, bạn muốn loại thanh toán nào? (Luu ý chúng tôi không chấp nhận loại thanh toán bằng tiền ảo như Bitcoin, ETH,...)",
        typeField: "radio",
        required: true,
        name: "Nếu tích hợp hệ thống thanh toán online bạn muốn loại thanh toán nào",
        options: [
          {
            label: "Stripe",
            value: "Stripe",
          },
          {
            label: "Paypal",
            value: "Paypal",
          },
          {
            label: "Visa",
            value: "Visa",
          },
          {
            label: "Ngân hàng nội địa",
            value: "Ngân hàng nội địa",
          },
          {
            label: "Bảo kim",
            value: "Bảo kim",
          },
          {
            label: "Momo",
            value: "Momo",
          },
          {
            label: "Khác",
            value: "Khác",
          },
        ],
      },
      {
        question:
          "Website bạn muốn làm có hiển thị cho nhiều ngôn ngữ khác nhau không? Nếu có vui lòng ghi rõ những loại ngôn ngữ mà bạn muốn hiển thị.",
        typeField: "radio",
        required: true,
        name: "Website bạn muốn làm có hiển thị cho nhiều ngôn ngữ khác nhau không Nếu có vui lòng ghi rõ những loại ngôn ngữ mà bạn muốn hiển thị",
        options: [
          {
            label: "Có",
            value: "Có",
          },
          {
            label: "Không",
            value: "Không",
          },
        ],
      },
      {
        question:
          "Những AI, chatbot mà bạn muốn tích hợp thêm vào website?<br/>VD: Google analytics, Tawk.to, Facebook chat,...",
        typeField: "text",
        required: true,
        name: "Những AI, chatbot mà bạn muốn tích hợp thêm vào website",
      },
      {
        question: "Những chức năng đặc biệt khác mà website của bạn muốn có.",
        typeField: "text",
        required: true,
        name: "Những chức năng đặc biệt khác mà website của bạn muốn có",
      },
    ],
    redirectToStep: 3,
  },
  11: {
    typeMess: TYPE_MESS.FORM,
    fields: [
      {
        question: "Website của bạn đang ở domain nào? hosting nào?",
        typeField: "text",
        name: "Website của bạn đang ở domain nào? hosting nào",
        required: true,
      },
      {
        question: "Công nghệ mà Website của bạn đang sử dụng?",
        typeField: "text",
        name: "Công nghệ mà Website của bạn đang sử dụng",
        required: true,
      },
      {
        question: "Website này đang gặp những vấn đề nào",
        typeField: "text",
        required: true,
        name: "Website này đang gặp những vấn đề nào",
      },
      {
        question: "Bạn muốn tích hợp thêm những chức năng nào cho Website này?",
        typeField: "text",
        required: true,
        name: "Bạn muốn tích hợp thêm những chức năng nào cho Website này",
      },
      {
        question: "Bạn hi vọng Website này sẽ thay đổi như thế nào?",
        typeField: "text",
        required: true,
        name: "Bạn hi vọng Website này sẽ thay đổi như thế nào",
      },
    ],
    redirectToStep: 4,
  },
  12: {
    typeMess: TYPE_MESS.FORM,
    fields: [
      {
        question:
          "Xin hãy chọn lấy một mẫu themes trong url sau:<br/><a class='link-description' href='https://themes.gleads.vn/' target='_blank' rel='noopener noreferrer'>https://themes.gleads.vn/</a>",
        typeField: "text",
        name: "Xin hãy chọn lấy một mẫu themes trong url sau",
        required: true,
      },
    ],
    redirectToStep: 4,
  },
  13: {
    typeMess: TYPE_MESS.FORM,
    fields: [
      {
        question: "Số trang cần thiết kế?",
        typeField: "text",
        name: "Số trang cần thiết kế",
        required: true,
      },
      {
        question:
          "Kiểu phông chữ mà bạn thích? (Serif hoặc San Serif hoặc dùng cả 2 cho từng mục đích)",
        typeField: "text",
        name: "Kiểu phông chữ mà bạn thích",
        required: true,
      },
      {
        question: "Màu sắc bạn MUỐN và KHÔNG MUỐN xuất hiện trong Website?",
        typeField: "text",
        required: true,
        name: "Màu sắc bạn MUỐN và KHÔNG MUỐN xuất hiện trong Website",
      },
      {
        question:
          "Định hướng phong cách Website như thế nào (chuyên nghiệp, đáng yêu hay hài hước, v.v.)",
        typeField: "text",
        required: true,
        name: "Định hướng phong cách Website như thế nào",
      },
      {
        question:
          "Bạn có thể cung cấp hình ảnh độc quyền (hình ảnh văn phòng/sản phẩm) để thể hiện trên Website?",
        typeField: "radio",
        required: true,
        name: "Bạn có thể cung cấp hình ảnh độc quyền để thể hiện trên Website",
        options: [
          {
            label: "Có",
            value: "Có",
          },
          {
            label: "Không",
            value: "Không",
          },
        ],
      },
      {
        question: "Website có animation không?",
        typeField: "radio",
        required: true,
        name: "Website có animation không",
        options: [
          {
            label: "Có",
            value: "Có",
          },
          {
            label: "Không",
            value: "Không",
          },
        ],
      },
      {
        question:
          "Có đối thủ cạnh tranh nào không? (Chúng tôi muốn biết thêm về môi trường/thị trường kinh doanh của bạn, nếu có)",
        typeField: "text",
        required: true,
        name: "Có đối thủ cạnh tranh nào không",
      },
    ],
    redirectToStep: 4,
  },
  14: {
    typeMess: TYPE_MESS.FORM,
    fields: [
      {
        question: "Kiểu phông chữ mà bạn thích? (Serif hoặc San Serif)",
        typeField: "text",
        name: "Kiểu phông chữ mà bạn thích",
        required: true,
      },
      {
        question: "Màu sắc bạn MUỐN và KHÔNG MUỐN xuất hiện trong logo?",
        typeField: "text",
        name: "Màu sắc bạn MUỐN và KHÔNG MUỐN xuất hiện trong logo",
        required: true,
      },
      {
        question: "Hình ảnh và phong cách mong muốn?",
        typeField: "text",
        name: "Hình ảnh và phong cách mong muốn",
        required: true,
      },
      {
        question:
          "Định hướng phong cách của logo như thế nào (chuyên nghiệp, đáng yêu hay hài hước, v.v.)",
        typeField: "text",
        name: "Định hướng phong cách của logo như thế nào",
        required: true,
      },
      {
        question:
          "Logo sẽ được thể hiện:· bằng các biểu tượng (Nike, Twitter, Starbucks, v.v.)<br/>HOẶC· bằng nguyên văn (eBay, CNN, v.v.)<br/>HOẶC bằng văn bản viết tắt (McDonald, Unilever, v.v.)",
        typeField: "text",
        name: "Logo sẽ được thể hiện",
        required: true,
      },
      {
        question: "Có thông điệp nào cần truyền tải trong logo không?",
        typeField: "text",
        name: "Có thông điệp nào cần truyền tải trong logo không",
        required: true,
      },
      {
        question: "Logo có kèm slogan hay không? Slogan là gì (nếu có)?",
        typeField: "text",
        name: "Logo có kèm slogan hay không",
        required: true,
      },
      {
        question: "Thiết kế đơn giản trực quan hay trừu tượng?",
        typeField: "text",
        name: "Thiết kế đơn giản trực quan hay trừu tượng",
        required: true,
      },
      {
        question:
          "Có biểu tượng nào đặc biệt gây ấn tượng với bạn không? Và tại sao?",
        typeField: "text",
        name: "Có biểu tượng nào đặc biệt gây ấn tượng với bạn không",
        required: true,
      },
      {
        question: "Mục đích sử dụng logo? (trang web, in ấn, danh thiếp, v.v.)",
        typeField: "text",
        name: "Mục đích sử dụng logo",
        required: true,
      },
      {
        question:
          "Có đối thủ cạnh tranh nào không? (Chúng tôi muốn biết thêm về môi trường/thị trường kinh doanh của bạn, nếu có)",
        typeField: "text",
        name: "Có đối thủ cạnh tranh nào không",
        required: true,
      },
      {
        question:
          "Thông tin (Tên công ty, địa chỉ và số điện thoại) để thiết kế email footer",
        typeField: "text",
        name: "Thông tin để thiết kế email footer",
        required: true,
      },
    ],
    redirectToStep: 5,
  },
  15: {
    typeMess: TYPE_MESS.FORM,
    fields: [
      {
        question:
          "Số trang bạn yêu cầu và các hạng mục cần xây dựng (nếu bạn có yêu cầu cụ thể)",
        typeField: "text",
        name: "Số trang bạn yêu cầu và các hạng mục cần xây dựng",
        required: true,
      },
      {
        question:
          "Ngôn ngữ bạn yêu cầu nội dung là tiếng anh, tiếng việt hay song ngữ?",
        typeField: "text",
        name: "Ngôn ngữ bạn yêu cầu nội dung là tiếng anh",
        required: true,
      },
      {
        question:
          "Giọng văn/phong cách nội dung mong muốn của bạn trên trang web.",
        typeField: "text",
        required: true,
        name: "Giọng văn phong cách nội dung mong muốn của bạn trên trang web",
      },
      {
        question:
          "Mô tả về công ty, doanh nghiệp của bạn.<ul> <li>Giá trị cốt lõi</li> <li>Phương châm kinh doanh</li> <li>Lĩnh vực kinh doanh</li> <li>Sản phẩm / dịch vụ kinh doanh</li> <li>Kinh nghiệm trong nghề (nếu có)</li> <li>Điểm khác biệt so với đối thủ (nếu có)</li> <li>Thành tích kinh doanh bạn muốn thể hiện (nếu có)</li> <li>Mạng lưới partner bạn muốn thể hiện (nếu có)</li> </ul>",
        typeField: "text",
        required: true,
        name: "Mô tả về công ty doanh nghiệp của bạn",
      },
      {
        question: "Mô tả đối tượng mục tiêu mà công ty bạn hướng tới",
        typeField: "text",
        required: true,
        name: "Mô tả đối tượng mục tiêu mà công ty bạn hướng tới",
      },
      {
        question:
          "Mô tả thị trường mục tiêu trong kế hoạch tương lai của công ty bạn (nếu bạn muốn thể hiện điều này trên trang web của mình)",
        typeField: "text",
        required: true,
        name: "Mô tả thị trường mục tiêu trong kế hoạch tương lai của công ty bạn",
      },
      {
        question:
          "List ra 3 điều quan trọng nhất mà bạn muốn khách hàng nhớ về trang web của bạn",
        typeField: "text",
        required: true,
        name: "List ra 3 điều quan trọng nhất mà bạn muốn khách hàng nhớ về trang web của bạn",
      },
      {
        question:
          "Bạn có muốn thể hiện phần thông tin Key Members của công ty bạn trên trang web không? Nếu có, vui lòng cung cấp ảnh, tên, chức vụ và mô tả ngắn gọn về các thành viên chủ chốt (tối thiểu 4 người)",
        typeField: "text",
        required: true,
        name: "Bạn có muốn thể hiện phần thông tin Key Members của công ty bạn trên trang web không? Nếu có, vui lòng cung cấp ảnh, tên, chức vụ và mô tả ngắn gọn về các thành viên chủ chốt",
      },
      {
        question:
          "Bạn có muốn nhấn mạnh tính năng, đặc điểm hoặc thông tin nào trên trang web của bạn không? Nêu rõ thông tin đó nếu có.",
        typeField: "text",
        required: true,
        name: "Bạn có muốn nhấn mạnh tính năng, đặc điểm hoặc thông tin nào trên trang web của bạn không-Nêu rõ thông tin đó nếu có",
      },
      {
        question:
          "Trang web bạn yêu cầu dự kiến thường xuyên thể hiện các chương trình khuyến mãi không? Thông tin các gói ưu đãi nếu có",
        typeField: "text",
        required: true,
        name: "Trang web bạn yêu cầu dự kiến thường xuyên thể hiện các chương trình khuyến mãi không-Thông tin các gói ưu đãi nếu có",
      },
      {
        question:
          "Bạn có muốn sử dụng dịch vụ viết blog của Gleads trong order lần này không? Nếu có, vui lòng trao đổi thêm với chúng tôi về yêu cầu của bạn.  ",
        typeField: "text",
        required: true,
        name: "Bạn có muốn sử dụng dịch vụ viết blog của Gleads trong order lần này không? Nếu có, vui lòng trao đổi thêm với chúng tôi về yêu cầu của bạn",
      },
    ],
    redirectToStep: 6,
  },
  16: {
    typeMess: TYPE_MESS.FORM,
    fields: [
      {
        question:
          "Nếu sử dụng domain của Gleads cung cấp, xin hãy ví dụ những domain màbạn muốn đăng ký để chúng tôi có gợi ý phù hợp.",
        typeField: "text",
        name: "Nếu sử dụng domain của Gleads cung cấp-xin hãy ví dụ những domain màbạn muốn đăng ký để chúng tôi có gợi ý phù hợp",
        required: true,
      },
    ],
    redirectToStep: 7,
  },
  17: {
    typeMess: TYPE_MESS.FORM,
    fields: [
      {
        question:
          "Bạn có muốn cấu hình hosting mức cơ bản, hay có yêu cầu cụ thể về hosting không? (VD về RAM, ổ cứng, băng thông,... )",
        typeField: "text",
        name: "Bạn có muốn cấu hình hosting mức cơ bản-hay có yêu cầu cụ thể về hosting không",
        required: true,
      },
    ],
    redirectToStep: 8,
  },
  [NUMBER_LAST_STEP]: {
    typeMess: TYPE_MESS.MESS,
    fields: [
      {
        label: "Thank you!",
      },
    ],
    redirectToStep: 0,
  },
};

function FormQuestions() {
  const { state } = useStoreContext();
  return (
    <>
      {state.answersOrder &&
        state.answersOrder.map((answerItem, index) => {
          const questionSelected = QUESTIONS[answerItem.step];
          return (
            <div key={index} className="group-question">
              {questionSelected.typeMess === TYPE_MESS.MESS && (
                <AnswerMess
                  questionSelected={questionSelected}
                  answerItem={answerItem}
                />
              )}
              {questionSelected.typeMess === TYPE_MESS.FORM && (
                <AnswerForm
                  questionSelected={questionSelected}
                  answerItem={answerItem}
                />
              )}
              {questionSelected.typeMess === TYPE_MESS.ONLY_RADIO && (
                <AnswerRadio
                  questionSelected={questionSelected}
                  answerItem={answerItem}
                />
              )}
            </div>
          );
        })}
    </>
  );
}

export default FormQuestions;
