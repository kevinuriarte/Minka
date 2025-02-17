const router = require("express").Router();
const sequelize = require("sequelize");
const { Post, User, Comment, Vote } = require("../models");

// display home
router.get("/", (req, res) => {
  Post.findAll({
    attributes: [
      "id",
      "post_title",
      "post_body",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM votes WHERE posts.id = votes.post_id)"
        ),
        "vote_count",
      ],
    ],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: ["id", "comment_text", "created_at", "post_id", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: Vote,
        attributes: ["id", "post_id", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbPosts) => {
      const posts = dbPosts.map((post) => {
        return post.get({ plain: true });
      });
      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "post_title",
      "post_body",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM votes WHERE posts.id = votes.post_id)"
        ),
        "vote_count",
      ],
    ],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: ["id", "comment_text", "created_at", "post_id", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: Vote,
        attributes: ["id", "post_id", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbPost) => {
      if (!dbPost) {
        res.redirect("/");
        return;
      }
      const post = dbPost.get({ plain: true });
      res.render("single-post", {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;