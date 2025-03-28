const fs = require("fs");

const coverageSummaryPath = "/coverage/coverage-final.json";

if (!fs.existsSync(coverageSummaryPath)) {
  console.error("❌ Coverage report not found. Run tests before committing.");
  process.exit(0);
}

const coverage = JSON.parse(fs.readFileSync(coverageSummaryPath, "utf8"));
console.log(coverage);
const linesCoverage = coverage.total.lines.pct;

if (linesCoverage < 50) {
  console.error(
    `❌ Test coverage too low (${linesCoverage}%). Minimum required: 50%.`
  );
  process.exit(1);
}

console.log(
  `✅ Coverage sufficient (${linesCoverage}%). Proceeding with commit.`
);
process.exit(0);
