Moe Community Cloud · MBCC Playbooks Hub
================================================

Files in this zip:
- index.html  -> Main hub page for moecommunitycloud.com

This version includes the playbook cover images for each card,
using relative paths so they work both locally and on the live site:

- assets/playbooks/ai-bubble.png
- assets/playbooks/retail.png
- assets/playbooks/smarthome.png
- assets/playbooks/agentops.png
- assets/playbooks/zerotrust.png
- assets/playbooks/iot.png
- assets/playbooks/infrastructure.png  (used for AI Infrastructure and Vapor Cloud)
- assets/playbooks/vertex.png

Make sure your repo has this structure:

- index.html
- assets/
    playbooks/
      ai-bubble.png
      retail.png
      smarthome.png
      agentops.png
      zerotrust.png
      iot.png
      infrastructure.png
      vertex.png

How to use:
1. Replace the existing index.html at the root of your moecommunitycloud.com site
   (e.g., in your GitHub Pages repo for the domain or your hosting root).
2. Commit and push if using GitHub.
3. Ensure your DNS and GitHub Pages settings are pointing moecommunitycloud.com
   at this repo and that Pages visibility is PUBLIC.
