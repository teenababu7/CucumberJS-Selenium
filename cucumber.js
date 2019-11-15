module.exports = {
    'default': './test/features --require ./test/stepdefinitions --require ./test/utils',
    dry: '--dry-run',
    summary: '--format summary',
    progress: '--format progress',
    html_report: '--format json:reports/cucumber_report.json',
    parallel: '--parallel 2'
};