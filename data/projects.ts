export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  focus: string;
  outcome: string;
  pages: number;
  accent: "blush" | "lilac" | "plum";
  layout: "folder" | "research" | "prompt" | "timeline" | "poster" | "manifesto";
  previewImages: string[];
  stats: { value: string; label: string }[];
  goal: string;
  process: string;
  deliverable: string;
  takeaway: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "thao-tac-tep-tin-thu-muc",
    number: "01",
    title: "Thao tác cơ bản với tệp tin và thư mục",
    shortTitle: "Tệp tin và thư mục",
    summary: "Thực hành tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp trên Windows theo từng bước cụ thể.",
    focus: "Kỹ năng nền tảng trong File Explorer",
    outcome: "Báo cáo minh chứng toàn bộ quy trình bằng ảnh chụp màn hình.",
    pages: 13,
    accent: "lilac",
    layout: "folder",
    previewImages: [
      "/assets/projects/p1/image5.webp",
      "/assets/projects/p1/image11.webp",
      "/assets/projects/p1/image23.webp",
    ],
    stats: [
      { value: "12", label: "bước thực hành" },
      { value: "23", label: "ảnh minh chứng" },
    ],
    goal: "Rèn luyện khả năng tổ chức dữ liệu cá nhân và sử dụng thành thạo những thao tác tệp tin, thư mục cơ bản trên Windows.",
    process: "Mình thực hiện lần lượt 12 bước trong File Explorer, từ tạo thư mục ThucHanh đến sao chép, di chuyển, xóa vĩnh viễn và khôi phục tệp từ Recycle Bin.",
    deliverable: "Một báo cáo 13 trang, trong đó mỗi thao tác đều đi kèm ảnh chụp màn hình để thể hiện rõ quá trình thực hiện.",
    takeaway: "Sau bài này, mình phân biệt rõ sao chép và di chuyển, đồng thời biết tổ chức tệp có quy tắc để dễ tìm, dễ kiểm tra và hạn chế mất dữ liệu.",
    tags: ["File Explorer", "Tổ chức dữ liệu", "Minh chứng"],
  },
  {
    slug: "tim-kiem-danh-gia-hoc-thuat",
    number: "02",
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    shortTitle: "Thông tin học thuật",
    summary: "Nghiên cứu tác động của xuất khẩu đến tăng trưởng kinh tế Việt Nam và đánh giá hệ thống nguồn tham khảo.",
    focus: "Tìm kiếm, sàng lọc và xếp hạng nguồn",
    outcome: "Bảng tổng hợp 11 tài liệu cùng danh mục tham khảo theo định dạng Harvard.",
    pages: 4,
    accent: "blush",
    layout: "research",
    previewImages: ["/assets/projects/p2/page-2.webp", "/assets/projects/p2/page-3.webp"],
    stats: [
      { value: "11", label: "tài liệu" },
      { value: "6", label: "bài báo khoa học" },
    ],
    goal: "Phát triển kỹ năng tìm kiếm và đánh giá nguồn học thuật đáng tin cậy cho một chủ đề gắn với ngành Kinh tế phát triển.",
    process: "Mình tìm kiếm bằng Google Scholar, thư viện số NEU và cổng thông tin World Bank, sau đó sàng lọc theo tác giả, tổ chức xuất bản, phương pháp nghiên cứu, mức độ cập nhật và độ tin cậy.",
    deliverable: "Báo cáo về tác động của xuất khẩu đến tăng trưởng kinh tế ở Việt Nam, kèm bảng đánh giá 11 nguồn và danh mục tài liệu tham khảo.",
    takeaway: "Mình hiểu rằng một nguồn phù hợp chưa chắc đã đáng tin; cần xem xét tác giả, đơn vị xuất bản, phương pháp, mức độ cập nhật và khả năng kiểm chứng.",
    tags: ["Google Scholar", "Kinh tế phát triển", "Harvard"],
  },
  {
    slug: "viet-prompt-hieu-qua",
    number: "03",
    title: "Viết prompt hiệu quả cho các tác vụ học tập",
    shortTitle: "Prompt học tập",
    summary: "Thử nghiệm ba cấp độ prompt cho tóm tắt, giải thích khái niệm và tạo câu hỏi ôn tập.",
    focus: "So sánh cấu trúc prompt và chất lượng đầu ra",
    outcome: "Chín prompt được thử nghiệm và đối chiếu bằng ảnh chụp kết quả.",
    pages: 9,
    accent: "lilac",
    layout: "prompt",
    previewImages: [
      "/assets/projects/p3/image3.webp",
      "/assets/projects/p3/image9.webp",
      "/assets/projects/p3/image7.webp",
    ],
    stats: [
      { value: "3", label: "tác vụ học tập" },
      { value: "9", label: "prompt thử nghiệm" },
    ],
    goal: "Hiểu cách độ rõ ràng, ngữ cảnh, vai trò và định dạng đầu ra ảnh hưởng trực tiếp đến chất lượng câu trả lời của AI.",
    process: "Với mỗi tác vụ, mình viết prompt cơ bản, prompt cải tiến và prompt nâng cao, sau đó thử nghiệm trên ChatGPT và so sánh kết quả theo độ rõ ràng, chi tiết và khả năng ứng dụng.",
    deliverable: "Báo cáo thử nghiệm ba tác vụ, bảng so sánh ba cấp độ prompt và các ảnh chụp đầu ra thực tế.",
    takeaway: "Prompt hiệu quả không đơn thuần là prompt dài hơn. Kết quả tốt hơn khi yêu cầu có mục tiêu, ngữ cảnh, đối tượng, ràng buộc và định dạng đầu ra rõ ràng.",
    tags: ["ChatGPT", "Prompt engineering", "So sánh"],
  },
  {
    slug: "hop-tac-du-an-nhom",
    number: "04",
    title: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    shortTitle: "Hợp tác trực tuyến",
    summary: "Theo dõi một tuần phối hợp nhóm để hoàn thiện bài thuyết trình về kế toán tài chính.",
    focus: "Google Docs, Google Drive và Google Meet",
    outcome: "Quy trình 7 ngày, phân công rõ vai trò và đánh giá hiệu quả từng công cụ.",
    pages: 9,
    accent: "blush",
    layout: "timeline",
    previewImages: [
      "/assets/projects/p4/image1.webp",
      "/assets/projects/p4/image2.webp",
      "/assets/projects/p4/image3.webp",
    ],
    stats: [
      { value: "7", label: "ngày phối hợp" },
      { value: "3", label: "công cụ chính" },
    ],
    goal: "Rèn luyện cách phân công, theo dõi tiến độ, chia sẻ tài nguyên và giao tiếp trong một dự án nhóm trên môi trường số.",
    process: "Trong 7 ngày, nhóm sử dụng Google Docs để cộng tác nội dung, Google Drive để lưu trữ tài liệu và Google Meet để họp, rà soát và tổng duyệt bài thuyết trình.",
    deliverable: "Báo cáo quy trình làm việc nhóm, bảng phân công nhiệm vụ, nhật ký 7 ngày, minh chứng và phần đánh giá ưu điểm, hạn chế của từng công cụ.",
    takeaway: "Công cụ trực tuyến chỉ phát huy hiệu quả khi nhóm thống nhất vai trò, thời hạn, cách đặt tên tệp và quy trình cập nhật tiến độ ngay từ đầu.",
    tags: ["Google Docs", "Google Drive", "Google Meet"],
  },
  {
    slug: "ai-sang-tao-noi-dung",
    number: "05",
    title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    shortTitle: "AI và sáng tạo",
    summary: "Kết hợp ChatGPT, AI tạo ảnh và Canva AI để thiết kế bài thuyết trình về phương pháp Pomodoro.",
    focus: "Từ ý tưởng, nội dung đến thiết kế hoàn chỉnh",
    outcome: "Bộ slide Pomodoro được chỉnh sửa và bổ sung đóng góp cá nhân.",
    pages: 9,
    accent: "blush",
    layout: "poster",
    previewImages: [
      "/assets/projects/p5/image5.webp",
      "/assets/projects/p5/image7.webp",
      "/assets/projects/p5/image9.webp",
    ],
    stats: [
      { value: "3", label: "công cụ AI" },
      { value: "6", label: "slide hoàn thiện" },
    ],
    goal: "Khám phá cách nhiều công cụ AI có thể hỗ trợ các giai đoạn khác nhau của quá trình sáng tạo nội dung số.",
    process: "Mình dùng ChatGPT để lên ý tưởng và viết nội dung, AI tạo ảnh để tạo hình minh họa, sau đó dùng Canva AI để xây dựng bố cục và chỉnh sửa lại sản phẩm.",
    deliverable: "Một bài thuyết trình 6 slide về phương pháp Pomodoro, kèm prompt, phiên bản trung gian, bảng so sánh công cụ và phần phân tích vai trò của AI.",
    takeaway: "AI giúp rút ngắn thời gian lên ý tưởng, nhưng sản phẩm chỉ phù hợp khi mình chủ động chọn lọc, rút gọn, chỉnh bố cục và bổ sung góc nhìn cá nhân.",
    tags: ["Pomodoro", "Canva AI", "AI tạo ảnh"],
  },
  {
    slug: "ai-co-trach-nhiem",
    number: "06",
    title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    shortTitle: "AI có trách nhiệm",
    summary: "Phân tích ranh giới đạo đức, minh bạch trích dẫn và xây dựng bộ nguyên tắc cá nhân khi dùng AI.",
    focus: "Liêm chính học thuật và tư duy độc lập",
    outcome: "Bảy nguyên tắc thực tiễn cùng infographic tổng kết.",
    pages: 5,
    accent: "plum",
    layout: "manifesto",
    previewImages: ["/assets/projects/p6/image1.webp"],
    stats: [
      { value: "7", label: "nguyên tắc" },
      { value: "3", label: "vấn đề đạo đức" },
    ],
    goal: "Xây dựng nhận thức về liêm chính học thuật, bản quyền, minh bạch và trách nhiệm của người học khi sử dụng AI.",
    process: "Mình nghiên cứu định hướng sử dụng AI, thực hiện một nhiệm vụ thuyết trình với ba prompt, kiểm chứng và chỉnh sửa đầu ra, sau đó phân tích các vấn đề đạo đức liên quan.",
    deliverable: "Báo cáo 5 trang, bộ 7 nguyên tắc cá nhân và infographic về sử dụng AI có trách nhiệm trong học thuật.",
    takeaway: "Mình xác định AI là công cụ hỗ trợ, không thay thế tư duy. Mọi đầu ra cần được kiểm chứng, chỉnh sửa và trích dẫn minh bạch trước khi sử dụng.",
    tags: ["Liêm chính học thuật", "Minh bạch", "Tư duy độc lập"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
