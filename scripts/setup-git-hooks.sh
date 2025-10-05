#!/bin/bash
#
# Setup script for git hooks
# Run this after cloning the repository

set -e

echo "Setting up git hooks..."

# Create hooks directory if it doesn't exist
mkdir -p .git/hooks

# Copy commit-msg hook
cat > .git/hooks/commit-msg << 'EOF'
#!/bin/sh
#
# Git hook to ensure commit messages follow conventional commit format
# and don't include Claude attribution

commit_regex='^(feat|fix|docs|style|refactor|perf|test|chore)(\(.+\))?: .{1,50}'

error_msg="Aborting commit. Your commit message is invalid. Please use format:
<type>[optional scope]: <description>

Example: feat: add user authentication
Types: feat, fix, docs, style, refactor, perf, test, chore"

# Check commit message format
if ! grep -qE "$commit_regex" "$1"; then
    echo "$error_msg" >&2
    exit 1
fi

# Check for Claude attribution and reject
if grep -qi "claude\|generated with\|co-authored-by: claude" "$1"; then
    echo "Aborting commit. Please remove Claude attribution from commit message." >&2
    exit 1
fi

exit 0
EOF

# Make hooks executable
chmod +x .git/hooks/commit-msg

echo "Git hooks setup complete!"
echo "Commit messages must follow conventional commit format."
echo "Claude attribution will be automatically rejected."