import jsPDF from "jspdf";
import tech_img from "./assets/Tech Team Certificate.png";

const generateCertificate = (name: string, course: string) => {
  const doc = new jsPDF({ orientation: "landscape" });

  doc.addImage(
    tech_img,
    "PNG",
    0,
    0,
    doc.internal.pageSize.getWidth(),
    doc.internal.pageSize.getHeight()
  );

  doc.setFontSize(36);
  doc.setFont("dancing-script");
  doc.text(name, 150, 110, { align: "center" });

  // Add course name
  // doc.setFontSize(20);
  // doc.text(course, 105, 195, { align: "center" });

  doc.save(`${name}-${course}.pdf`);
};

export default function CertificateGenerator({
  name,
  course,
}: {
  name: string;
  course: string;
}) {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <button
        onClick={() => generateCertificate(name, course)}
        className='text-lg bg-black text-white rounded-lg py-2 px-4'
      >
        Generate Certificate
      </button>
    </div>
  );
}
