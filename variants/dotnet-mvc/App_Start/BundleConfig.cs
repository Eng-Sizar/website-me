using System.Web;
using System.Web.Optimization;

namespace PortfolioApp
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            // 1. jQuery Bundle
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/script.js"));

            // 2. Bootstrap 5.3 JS Bundle
            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.bundle.js"));

            // 3. Bootstrap 5.3 RTL CSS
            bundles.Add(new StyleBundle("~/Content/bootstrap-rtl").Include(
                      "~/Content/bootstrap.rtl.css"));

            // 4. Compiled SCSS Main Stylesheet
            bundles.Add(new StyleBundle("~/Content/scss-main").Include(
                      "~/Content/dist/css/main.css"));

            BundleTable.EnableOptimizations = true;
        }
    }
}
