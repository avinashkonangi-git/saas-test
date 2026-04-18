import { notFound } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ResultsSection from "@/components/ResultsSection";
import Build from "@/components/Build";
import { getPageData } from "@/lib/api";

export default async function Home() {
  const page = await getPageData("home");
  if (!page) {
    notFound(); // ✅ clean 404 page
  }
  const acf = page.acf;
  return (
    <>
      <HeroSection banner_heading={acf.banner_heading} banner_sub_title={acf.banner_sub_title} banner_image={acf.banner_image} />
      <ProblemSection section2_title={acf.section2_title} section2_sub_title={acf.section2_sub_title} section2_bottom_text={acf.section2_bottom_text} />
      <ResultsSection turn_rep_activity_title={acf.turn_rep_activity_title} turn_rep_activity_sub_title={acf.turn_rep_activity_sub_title} help_reps_talk_title={acf.help_reps_talk_title} help_reps_talk_description={acf.help_reps_talk_description} help_reps_talk_image={acf.help_reps_talk_image.url} make_followups_title={acf.make_followups_title} make_followups_description={acf.make_followups_description} make_followups_image={acf.make_followups_image} />
      <Build build_a_team_title={acf.build_a_team_title} build_a_team_description={acf.build_a_team_description} build_a_team_image={acf.build_a_team_image.url} />
    </>
  );
}