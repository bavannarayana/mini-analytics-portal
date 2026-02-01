export function exportToCSV(rows: any[], filename = "topn.csv") {
  if (!rows.length) return;

  const headers = Object.keys(rows[0]).join(",");
  const values = rows.map((row) => Object.values(row).join(","));

  const csvContent = headers + "\n" + values.join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;

  link.click();
}
