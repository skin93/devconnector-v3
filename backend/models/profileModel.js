import mongoose from 'mongoose';

const profileSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    company: {
      type: String,
    },
    website: {
      type: String,
    },
    location: {
      type: String,
    },
    status: {
      type: String,
      required: [true, 'Please add a status'],
    },
    skills: {
      type: [String],
      required: [true, 'Please add some skills'],
    },
    bio: {
      type: String,
    },
    githubusername: {
      type: String,
    },
    experience: [
      {
        title: {
          type: String,
          required: [true, 'Please ad an experience title'],
        },
        company: {
          type: String,
          required: [true, 'Please add a company name'],
        },
        location: {
          type: String,
        },
        from: {
          type: Date,
          required: [true, 'Please add a date from'],
        },
        to: {
          type: Date,
        },
        current: {
          type: Boolean,
          default: false,
        },
        description: {
          type: String,
        },
      },
    ],
    education: [
      {
        school: {
          type: String,
          required: [true, 'Please add a school name'],
        },
        degree: {
          type: String,
          required: [true, 'Please add a degree'],
        },
        fieldofstudy: {
          type: String,
          required: [true, 'Please add a field of study'],
        },
        from: {
          type: Date,
          required: [true, 'Please add a date from'],
        },
        to: {
          type: Date,
        },
        current: {
          type: Boolean,
          default: false,
        },
        description: {
          type: String,
        },
      },
    ],
    social: [
      {
        youtube: {
          type: String,
        },
        twitter: {
          type: String,
        },
        facebook: {
          type: String,
        },
        linkedin: {
          type: String,
        },
        instagram: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
