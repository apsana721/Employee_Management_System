import React, { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const ExportDropdown = ({ users }) => {
  const [exportType, setExportType] = useState("");

  const handleExport = (type) => {
    if (type === "excel") {
      const worksheet = XLSX.utils.json_to_sheet(users);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");

      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      const fileData = new Blob([excelBuffer], {
        type: "application/octet-stream",
      });
      saveAs(fileData, "EmployeesData.xlsx");
    } else if (type === "pdf") {
      const doc = new jsPDF();
      doc.text("Employee Report", 14, 10);

      const tableColumn = ["Emp ID", "Emp Name", "Emp Designation", "Emp Department","Emp Salary"];
      const tableRows = users.map((emp) => [
        emp.empId,
        emp.empName,
        emp.empDesg,
        emp.empDept,
        emp.empSalary,
      ]);

      autoTable(doc, {
        head: [tableColumn],
        body: tableRows,
        startY: 20,
      });

      doc.save("EmployeesData.pdf");
    }

    setExportType("");
  };

  return (
    <div className="relative inline-block text-left mb-4">
      <label className="block mb-1 text-sm font-semibold text-gray-700">
        Export Options
      </label>
      <select
        className="block w-48 px-4 py-2 text-md text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition duration-150 ease-in-out"
        value={exportType}
        onChange={(e) => handleExport(e.target.value)}
      >
        <option value="" disabled selected>
          Select Format
        </option>
        <option value="excel">📊 Export to Excel</option>
        <option value="pdf">📄 Export to PDF</option>
      </select>
    </div>
  );
};

export default ExportDropdown;